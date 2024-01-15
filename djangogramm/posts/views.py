from django.views import View
from django.shortcuts import render, redirect, get_object_or_404

from icecream import ic

from posts.models import Post, Image
from posts.forms import PostForm, ImageForm


class PostEditView(View):
    template_name = 'posts/post_edit.html'

    def get(self, request, post_id=None):
        if post_id:
            post = get_object_or_404(Post, id=post_id)
            images = Image.objects.filter(post=post)
        else:
            post = Post(user=request.user)
            images = Image.objects.none()  # No images since the post is not yet created

        post_form = PostForm(instance=post)
        image_form = ImageForm()

        return render(request, self.template_name, {
            'post_form': post_form,
            'image_form': image_form,
            'post': post,
            'images': images
        })

    def post(self, request, post_id=None):
        creating_new_post = post_id is None
        post = get_object_or_404(Post, id=post_id) if post_id else Post(user=request.user)
        post_form = PostForm(request.POST, instance=post)

        if 'add_image' in request.POST:
            image_form = ImageForm(request.POST, request.FILES)
            if post_form.is_valid() and image_form.is_valid():
                saved_post = post_form.save(commit=False)
                if creating_new_post:
                    saved_post.number_likes = 0
                saved_post.save()

                new_image = image_form.save(commit=False)
                new_image.post = saved_post
                new_image.save()
                return redirect('edit_post', saved_post.id)
        elif 'delete_image' in request.POST:
            image_id = request.POST.get('delete_image')
            Image.objects.filter(id=image_id).delete()
            return redirect('edit_post', post.id)
        else:
            if post_form.is_valid():
                saved_post = post_form.save(commit=False)
                if creating_new_post:
                    saved_post.number_likes = 0
                saved_post.save()
                return redirect('post_detail', saved_post.id)

        images = Image.objects.filter(post=post)

        return render(request, self.template_name, {
            'post_form': post_form,
            'image_form': ImageForm(),
            'post': post,
            'images': images
        })

