from django.core.exceptions import ObjectDoesNotExist
from django.shortcuts import render, redirect
from django.contrib.auth import login, logout
from django.views.decorators.http import require_GET, require_http_methods
from django.contrib import messages
from django.urls import reverse, reverse_lazy
from django.views.generic.edit import UpdateView
from django.contrib.auth.mixins import LoginRequiredMixin
from django.shortcuts import get_object_or_404, redirect
from django.utils import timezone
from django.contrib.auth import login

from icecream import ic

from users.forms import LoginForm
from users.services import authenticate_custom
from users.models import UserProfile
from users.forms import UserProfileForm
from registration.models import ActivationLink


@require_http_methods(['GET', 'POST'])
def login_view(request):
    if request.method == 'POST':
        form = LoginForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']
            user = authenticate_custom(username=username, password=password)
            if user is not None:
                if user.is_active:
                    login(request, user)
                    return redirect('home')
                else:
                    messages.error(request, 'User is not active')
            else:
                messages.error(request, 'Incorrect credentials')
    else:
        form = LoginForm()

    return render(request, 'users/login.html', {'form': form})


@require_GET
def logout_view(request):
    logout(request)
    return redirect(reverse('home'))


@require_GET
def home_view(request):
    if request.user.is_authenticated:
        return render(request, 'users/home_registered.html')
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
        login(request, user)

        messages.success(request, 'Congratulations! Your account is activated.')

        return redirect(reverse('profile'))

    except ObjectDoesNotExist:
        messages.error(request, 'Activation link is invalid or expired.')
        return render(request, 'users/activate.html')


class UserProfileUpdateView(LoginRequiredMixin, UpdateView):
    model = UserProfile
    form_class = UserProfileForm
    template_name = 'users/profile_edit.html'
    success_url = reverse_lazy('profile')

    def get_form_kwargs(self):
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
