from django.urls import path
from registration.views import RegisterView, success_url

urlpatterns = [
    path("", RegisterView.as_view(), name="register"),
    path("success-url/", success_url, name="success-url"),
]
