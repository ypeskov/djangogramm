import pytest

from icecream import ic
from django.contrib.auth.models import User

from registration.models import ActivationLink
from registration.services import register_user


def test_activation_link_creation(mailoutbox):
    user_email = 'user@example.com'
    user = register_user(user_email, 'password123')
    mail = mailoutbox[0]
    assert mail.subject == 'Djangogramm - Account Activation'
    assert mail.to == [user_email]
    user = User.objects.get(id=user.id)
    link = ActivationLink.objects.get(user_id=user.id)
    assert link.user == user
    assert str(link) == f'ActivationLink {link.id}'



