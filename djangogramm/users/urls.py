from django.urls import path

from users.views import activate_view, UserProfileUpdateView, UserLogin, logout_view, UserInfoView, follow_user, \
    get_user_info

urlpatterns = [
    path('login/', UserLogin.as_view(), name='login'),
    path('logout/', logout_view, name='logout'),
    path('activate/<str:link_hash>/', activate_view, name='activate'),
    path('profile/', UserProfileUpdateView.as_view(), name='profile'),
    path('info/<int:user_id>/', UserInfoView.as_view(), name='user_info'),
    path('<int:user_id>/', get_user_info, name='get_user_info'),
    path('<int:user_id>/follow/', follow_user, name='follow_user'),
]
