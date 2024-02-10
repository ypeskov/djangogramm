from django.views import View
from django.shortcuts import render, redirect, get_object_or_404
from django.views.generic import ListView

from icecream import ic

from posts.models import Post, Image, Tag
from posts.forms import PostForm, ImageForm, TagForm
from posts.services import add_image, delete_image, save_post


class PostEditView(View):
    template_name = 'posts/post_edit.html'

    def get(self, request, post_id=None):
        if post_id:
            post = get_object_or_404(Post, id=post_id)
            images = Image.objects.filter(post=post)
        else:  # pragma: no cover
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
            add_image(request, post_form, creating_new_post)
        elif 'delete_image' in request.POST:
            delete_image(request, post)
        else:
            if post_form.is_valid():
                save_post(post_form, request, creating_new_post)

        # prepare images variable to be used in the template. Empty if creating a new post
        if not creating_new_post:
            images = Image.objects.filter(post=post)
        else:
            images = Image.objects.none()

        return render(request, self.template_name, {
            'post_form': post_form,
            'image_form': ImageForm(),
            'post': post,
            'images': images
        })


class TagAddView(View):
    template_name = 'posts/add_tag.html'

    def get(self, request):
        tags = Tag.objects.all()
        form = TagForm()
        return render(request, self.template_name, {'tags': tags, 'form': form})

    def post(self, request):
        form = TagForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('add_tag')
        else:
            tags = Tag.objects.all()
            return render(request, self.template_name, {'tags': tags, 'form': form})


def detail_post(request, post_id):
    post = Post.objects.get(id=post_id)
    images = Image.objects.filter(post=post)
    tags = post.tags.all()

    context = {
        'post': post,
        'images': images,
        'tags': tags,
    }

    return render(request, 'posts/post_detail.html', context)


class PostListView(ListView):
    model = Post
    template_name = 'posts/post_list.html'
    context_object_name = 'posts'
    ordering = ['-created_at']
    paginate_by = 10

    def get_queryset(self):
        order = self.request.GET.get('order', 'desc')
        if order == 'asc':
            return Post.objects.all().order_by('created_at')
        return super().get_queryset()
