from django.shortcuts import render


def login_view(request):
    return "It is login page"


def home_view(request):
    return render(request, 'users/home_unregistered.html')
