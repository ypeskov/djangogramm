from django.core.files.storage import default_storage
from django.core.files.base import ContentFile
from django.shortcuts import redirect
from PIL import Image as PilImage
import io

from icecream import ic

from posts.models import Image, Tag, Post
from users.models import Subscription


def add_images(post: Post, files):
    for file in files.getlist('image'):
        img_instance = Image.objects.create(post=post, image=file)
        preview_img = PilImage.open(img_instance.image)
        preview_img.thumbnail((300, 10_000))
        thumb_io = io.BytesIO()
        preview_img.save(thumb_io, 'JPEG', quality=60)
        preview_name = f"{img_instance.image.name}".split('/')[-1]
        img_instance.preview.save(preview_name, ContentFile(thumb_io.getvalue()), save=False)
        img_instance.save()


def delete_image(request, post):
    image_id = request.POST.get('delete_image')
    images = Image.objects.filter(id=image_id)
    for img in images:
        img.image.delete()
        img.preview.delete()
        img.delete()
    return redirect('edit_post', post.id)


def save_post(post_form, request, creating_new_post):
    saved_post = post_form.save(commit=False)
    if creating_new_post:
        saved_post.number_likes = 0
    saved_post.save()

    tag_ids = request.POST.getlist('tags')
    tag_ids = [int(tag_id.strip()) for tag_id in tag_ids if tag_id.strip().isdigit()]
    tags = Tag.objects.filter(id__in=tag_ids)
    saved_post.tags.set(tags)

    add_images(saved_post, request.FILES)

    return redirect('detail_post', saved_post.id)


def get_posts_from_subscriptions(user, order='desc'):
    following_ids = Subscription.objects.filter(follower=user).values_list('following_id', flat=True)
    order_by = 'created_at' if order == 'asc' else '-created_at'
    posts = Post.objects.filter(user__id__in=following_ids).order_by(order_by)

    return posts

