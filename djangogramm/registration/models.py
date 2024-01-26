from django.db import models
from django.contrib.auth.models import User


class ActivationLink(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    link_hash = models.CharField(max_length=255)
    expires_at = models.DateTimeField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"ActivationLink {self.id}"
