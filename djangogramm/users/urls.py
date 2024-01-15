from django.urls import path

from users.views import login_view, logout_view, activate_view, UserProfileUpdateView

urlpatterns = [
    path('login/', login_view, name='login'),
    path('logout/', logout_view, name='logout'),
    path('activate/<str:link_hash>/', activate_view, name='activate'),
    path('profile/', UserProfileUpdateView.as_view(), name='profile'),
]
