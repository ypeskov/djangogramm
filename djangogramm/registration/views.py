from django.views import View
from django.shortcuts import render, redirect
from django.http import HttpResponseRedirect
from django.contrib import messages
from django.contrib.auth.models import User
from .forms import RegistrationForm


class RegisterView(View):
    def get(self, request):
        return render(request, 'registration/register.html', {'form': RegistrationForm()})

    def post(self, request):
        form = RegistrationForm(request.POST)
        if form.is_valid():
            email = form.cleaned_data.get('email')
            if User.objects.filter(email=email).exists():
                messages.error(request, "Email is already used")
                return render(request, 'registration/register.html', {'form': form})

            user = User.objects.create_user(
                username=email,
                email=email,
                password=form.cleaned_data.get('password')
            )
            return HttpResponseRedirect('/success-url/')

        return render(request, 'registration/register.html', {'form': form})
