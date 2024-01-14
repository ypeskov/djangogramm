from django.contrib.auth.models import User


def register_user(email, password):
    user = User.objects.create_user(
        username=email,
        email=email,
        password=password,
        is_active=False
    )
    return user
