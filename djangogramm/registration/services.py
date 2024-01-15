import hashlib
import datetime

from django.core.mail import EmailMessage
from django.template.loader import render_to_string
from django.contrib.auth.models import User
from django.urls import reverse
from django.utils import timezone
from django.conf import settings
from icecream import ic

from djangogramm.settings import env_config, CURRENT_FULL_DOMAIN
from registration.models import ActivationLink


def register_user(email, password):
    user = User.objects.create_user(
        username=email,
        email=email,
        password=password,
        is_active=False
    )
    initialize_activation_email(user)

    return user


def generate_activation_hash(user):
    secret_key = settings.SECRET_KEY
    unique_string = f"{user.id}-{user.email}-{timezone.now()}-{secret_key}"
    return hashlib.sha256(unique_string.encode()).hexdigest()


def initialize_activation_email(user):
    link_hash = generate_activation_hash(user)
    activation_link = ActivationLink(
        user_id=user.id,
        link_hash=link_hash,
        expires_at=timezone.now() + datetime.timedelta(days=1)
    )
    activation_link.save()
    send_activation_email(user, link_hash)
    return link_hash


def send_activation_email(user, link_hash):
    subject = "Djangogramm - Account Activation"
    url = CURRENT_FULL_DOMAIN + reverse('activate', kwargs={'link_hash': link_hash})
    html_content = render_to_string('registration/email_template.html',
                                    {'user': user, 'activation_link': url})
    email = EmailMessage(
        subject,
        html_content,
        from_email=env_config('EMAIL_FROM'),
        to=[user.email],
        reply_to=[env_config('EMAIL_FROM')],
    )
    email.content_subtype = "html"
    email.send()
