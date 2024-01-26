from django.urls import path
from posts.views import PostEditView, TagAddView, detail_post, PostListView

urlpatterns = [
    path('', PostListView.as_view(), name='post_feed'),
    path('edit/<int:post_id>/', PostEditView.as_view(), name='edit_post'),
    path('new/', PostEditView.as_view(), name='new_post'),
    path('tag/add/', TagAddView.as_view(), name='add_tag'),
    path('show/<int:post_id>/', detail_post, name='detail_post'),
]