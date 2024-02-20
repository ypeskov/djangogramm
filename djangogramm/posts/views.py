from django.views import View
from django.shortcuts import render, redirect, get_object_or_404
from django.views.generic import ListView
from django.contrib.auth.decorators import login_required
from django.views.decorators.http import require_GET

from icecream import ic

from posts.models import Post, Image, Tag, Like
from posts.forms import PostForm, TagForm
from posts.services import delete_image, save_post, get_posts_from_subscriptions


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

        return render(request, self.template_name, {
            'post_form': post_form,
            'post': post,
            'images': images
        })

    def post(self, request, post_id=None):
        creating_new_post = post_id is None
        post = get_object_or_404(Post, id=post_id) if post_id else Post(user=request.user)
        post_form = PostForm(request.POST, instance=post)

        if 'delete_image' in request.POST:
            return delete_image(request, post)
        else:
            if post_form.is_valid():
                return save_post(post_form, request, creating_new_post)

        # prepare images variable to be used in the template. Empty if creating a new post
        if not creating_new_post:
            images = Image.objects.filter(post=post)
        else:
            images = Image.objects.none()

        return render(request, self.template_name, {
            'post_form': post_form,
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
    paginate_by = 5

    def __init__(self):
        super().__init__()
        self.show_subscriptions = False

    def get_queryset(self):
        order = self.request.GET.get('order', 'desc')
        self.show_subscriptions = self.request.GET.get('show_subscriptions', 'false') == 'true'

        if self.show_subscriptions:
            return get_posts_from_subscriptions(self.request.user, order)
        elif order == 'asc':
            return Post.objects.order_by('created_at')
        else:
            return Post.objects.order_by('-created_at')

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['order'] = 'asc' if self.request.GET.get('order', 'desc') == 'desc' else 'desc'
        context['show_subs'] = '&show_subscriptions=true' if self.show_subscriptions else ''
        return context


@login_required
@require_GET
def like_post(request, post_id):
    post = get_object_or_404(Post, id=post_id)
    like_qs = Like.objects.filter(user=request.user, post=post)
    ic(like_qs)
    if like_qs.exists():
        like_qs[0].delete()
    else:
        Like.objects.create(user=request.user, post=post)
    return redirect('post_feed')
