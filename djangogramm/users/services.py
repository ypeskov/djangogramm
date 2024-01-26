from django.contrib.auth.models import User


def authenticate_custom(username=None, password=None):
    try:
        user = User.objects.get(username=username)
        if user.check_password(password):
            return user
        else:
            return None
    except User.DoesNotExist:
        return None
