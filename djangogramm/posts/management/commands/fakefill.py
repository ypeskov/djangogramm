from random import choice, sample

from django.core.management.base import BaseCommand
from django.contrib.auth.models import User
from icecream import ic

from users.models import UserProfile
from ._fakesrc import users_data, posts_data, tags_data
from posts.models import Tag, Post


class Command(BaseCommand):
    help = 'Fill some fake data for DjangoGramm'

    def handle(self, *args, **options):
        users = self.create_users_if_not_exist()
        self.create_tags_if_not_exist()
        self.create_posts(users)

    def create_users_if_not_exist(self):
        created_users = []

        for user_data in users_data:
            existing_user = User.objects.filter(email=user_data['email']).first()

            if not existing_user:
                user = User(
                    email=user_data['email'],
                    username=user_data['username'],
                    password=user_data['password'],
                    is_active=True
                )
                user.save()

                profile = UserProfile(
                    user=user,
                    bio=f"{user.username}'s bio"
                )
                profile.save()

                created_users.append((user, profile))

        print(f"Users created: {created_users}")

        return created_users

    def create_tags_if_not_exist(self):
        tags_to_create = []
        for tag_name in tags_data:
            existing_tag = Tag.objects.filter(tag_name=tag_name).first()

            if not existing_tag:
                tag = Tag(tag_name=tag_name)
                tags_to_create.append(tag)

        if tags_to_create:
            Tag.objects.bulk_create(tags_to_create)

        print(f"Tags create: {tags_to_create}")

    def create_posts(self, users):
        if not users:
            print("No users available. Please create users first.")
            return

        all_tags = list(Tag.objects.all())
        posts_per_user = len(posts_data) // len(users)

        user_index = 0
        for i, post_data in enumerate(posts_data):
            user = users[user_index]

            post = Post(
                user_id=user[0].id,
                title=post_data['title'],
                description=post_data['description'],
                status=post_data['status'],
                number_likes=0
            )
            post.save()

            tags_for_post = sample(all_tags, min(len(all_tags), 3))
            for tag in tags_for_post:
                post.tags.add(tag)

            if (i + 1) % posts_per_user == 0 and user_index < len(users) - 1:
                user_index += 1

        print(f"Posts created")
