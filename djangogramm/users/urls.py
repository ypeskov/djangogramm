from django.urls import path

from users.views import home_view, login_view

urlpatterns = [
    path('login/', login_view, name='login'),
]
