from django.core.management.base import BaseCommand
from django.contrib.auth.models import User

from users.models import UserProfile
from posts.models import Post, Tag
from ._fakesrc import users_data, tags_data


class Command(BaseCommand):
    help = 'Clean fake data for DjangoGramm'

    def handle(self, *args, **options):
        self.delete_posts()
        self.delete_tags()
        self.delete_users_and_profiles()

    def delete_posts(self):
        user_emails = [user['email'] for user in users_data]
        users = User.objects.filter(email__in=user_emails)
        Post.objects.filter(user__in=users).delete()
        print("All fake posts deleted.")

    def delete_tags(self):
        Tag.objects.filter(tag_name__in=tags_data).delete()
        print("All fake tags deleted.")

    def delete_users_and_profiles(self):
        for user_data in users_data:
            try:
                user = User.objects.get(email=user_data['email'])
                UserProfile.objects.get(user=user).delete()
                user.delete()
            except User.DoesNotExist:
                continue
        print("All fake users and their profiles deleted.")
