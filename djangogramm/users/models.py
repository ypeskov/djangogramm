from django.db import models
from django.contrib.auth.models import User


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    avatar = models.ImageField(upload_to='avatars/', null=True, blank=True)
    bio = models.TextField()

    def __str__(self):
        return f"{self.user.username}'s profile"

    def __repr__(self):
        return f"<UserProfile (user_id={self.user_id}, avatar={self.avatar})>"
