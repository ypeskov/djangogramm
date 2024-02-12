from django.urls import path

from users.views import activate_view, UserProfileUpdateView, UserLogin, logout_view

urlpatterns = [
    path('login/', UserLogin.as_view(), name='login'),
    path('logout/', logout_view, name='logout'),
    path('activate/<str:link_hash>/', activate_view, name='activate'),
    path('profile/', UserProfileUpdateView.as_view(), name='profile'),
]
