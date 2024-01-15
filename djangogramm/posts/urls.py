from django.urls import path
from posts.views import PostEditView, TagAddView

urlpatterns = [
    path('edit/<int:post_id>/', PostEditView.as_view(), name='edit_post'),
    path('new/', PostEditView.as_view(), name='new_post'),
    path('tag/add/', TagAddView.as_view(), name='add_tag'),
]
