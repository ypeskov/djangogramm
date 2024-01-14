from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.views.decorators.http import require_GET, require_http_methods
from django.contrib import messages
from django.urls import reverse

from users.forms import LoginForm


@require_http_methods(['GET', 'POST'])
def login_view(request):
    if request.method == 'POST':
        form = LoginForm(request.POST)
        if form.is_valid():
            username = form.cleaned_data['username']
            password = form.cleaned_data['password']
            user = authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user)
                return redirect('home')
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
