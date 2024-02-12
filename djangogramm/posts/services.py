from django.core.files.storage import default_storage
from django.shortcuts import redirect

from icecream import ic

from posts.models import Image, Tag, Post


def add_images(post: Post, files):
    for file in files.getlist('image'):
        Image.objects.create(post=post, image=file)


def delete_image(request, post):
    image_id = request.POST.get('delete_image')
    image = Image.objects.filter(id=image_id)
    if len(image) > 0:
        img_path = image.first().image.path
        if default_storage.exists(img_path):
            default_storage.delete(img_path)
        image.delete()
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