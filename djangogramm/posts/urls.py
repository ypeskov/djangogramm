from django.urls import path
from .views import PostEditView

urlpatterns = [
    path('edit/<int:post_id>/', PostEditView.as_view(), name='edit_post'),
    path('new/', PostEditView.as_view(), name='new_post'),
]
