from django.contrib.auth.decorators import login_required
from django.core.exceptions import ObjectDoesNotExist
from django.shortcuts import render, redirect
from django.contrib.auth import logout
from django.views.decorators.http import require_GET
from django.contrib import messages
from django.urls import reverse, reverse_lazy
from django.views.generic.edit import UpdateView
from django.contrib.auth.views import LoginView
from django.contrib.auth.mixins import LoginRequiredMixin
from django.shortcuts import get_object_or_404, redirect
from django.utils import timezone
from django.contrib.auth import login
from django.views import View
from django.contrib.auth.models import User
from django.http import JsonResponse

from icecream import ic

from users.models import UserProfile, Subscription
from posts.models import Post
from users.forms import UserProfileForm
from registration.models import ActivationLink


class UserLogin(LoginView):
    template_name = 'users/login.html'
    redirect_authenticated_user = True


@require_GET
def logout_view(request):
    logout(request)
    return redirect(reverse('home'))


@require_GET
def home_view(request):  # pragma: no cover
    if request.user.is_authenticated:
        return redirect(reverse('post_feed'))
    else:
        return render(request, 'users/home_unregistered.html')


@require_GET
def activate_view(request, link_hash):
    try:
        activation_link = ActivationLink.objects.get(link_hash=link_hash, expires_at__gte=timezone.now())

        user = activation_link.user
        user.is_active = True
        user.save()

        UserProfile.objects.get_or_create(user=user)

        activation_link.delete()
        login(request, user, backend='django.contrib.auth.backends.ModelBackend')

        messages.success(request, 'Congratulations! Your account is activated.')

        return redirect(reverse('profile'))

    except ObjectDoesNotExist as e:
        messages.error(request, 'Activation link is invalid or expired.')
        return render(request, 'users/activate.html')


class UserProfileUpdateView(LoginRequiredMixin, UpdateView):
    model = UserProfile
    form_class = UserProfileForm
    template_name = 'users/profile_edit.html'
    success_url = reverse_lazy('profile')

    def get_form_kwargs(self):  # pragma: no cover
        kwargs = super(UserProfileUpdateView, self).get_form_kwargs()
        kwargs.update({'user': self.request.user})
        return kwargs

    def form_valid(self, form):
        user = self.request.user
        user.first_name = form.cleaned_data['first_name']
        user.last_name = form.cleaned_data['last_name']
        user.save()
        form.save()
        return super(UserProfileUpdateView, self).form_valid(form)

    def get_object(self):
        return get_object_or_404(UserProfile, user=self.request.user)


class UserInfoView(View):
    template_name = 'users/user_info.html'

    def get(self, request, user_id):
        user = User.objects.get(id=user_id)
        posts = Post.objects.filter(user=user).order_by('-created_at')[:10]

        is_following = False
        try:
            Subscription.objects.get(follower=request.user, following=user)
            is_following = True
        except ObjectDoesNotExist:
            is_following = False

        return render(request, self.template_name, {'user': user, 'posts': posts, 'is_following': is_following})


@require_GET
@login_required
def follow_user(request, user_id):
    follower_user = request.user
    following_user = User.objects.get(id=user_id)
    try:
        subscription = Subscription.objects.get(follower=follower_user, following=following_user)
        subscription.delete()
        is_following = False
    except ObjectDoesNotExist:
        Subscription.objects.create(follower=follower_user, following=following_user)
        is_following = True

    return JsonResponse({'is_following': is_following, })


@require_GET
@login_required
def get_user_info(request, user_id):
    user = User.objects.get(id=user_id)
    is_following = False
    try:
        Subscription.objects.get(follower=request.user, following=user)
        is_following = True
    except ObjectDoesNotExist:
        is_following = False

    return JsonResponse({'is_following': is_following})


def get_username_as_email(details, *args, **kwargs):
    """Set the username to the user's email."""
    email = details.get('email')
    if email:
        return {'username': email}
    else:
        raise ValueError('Email is required for username')


def populate_user_profile(details, user=None, *args, **kwargs):
    """Create a user if it doesn't exist."""
    if user:
        return {'is_new': False, 'user': user}
    email = details.get('email')
    if email:
        user, created = User.objects.get_or_create(email=email, defaults={'username': email})
        return {
            'is_new': created,
            'user': user
        }
