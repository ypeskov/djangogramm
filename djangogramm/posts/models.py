from django.db import models
from django.contrib.auth.models import User


class Post(models.Model):
    STATUS_CHOICES = (
        ('draft', 'Draft'),
        ('posted', 'Posted'),
    )

    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField(help_text='Content of the post')
    status = models.CharField(max_length=20, choices=STATUS_CHOICES)
    number_likes = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

    def __repr__(self):
        return f'Post(id={self.id}, title="{self.title}", user_id={self.user.id}, status="{self.status}")'

    class Meta:
        verbose_name = 'Post'
        verbose_name_plural = 'Posts'
