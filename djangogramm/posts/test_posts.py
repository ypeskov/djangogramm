import pytest

from django.urls import reverse
from django.test import override_settings
from icecream import ic

from djangogramm.settings import BASE_DIR
from posts.forms import PostForm
from posts.models import Post


@pytest.fixture
def one_post(create_user, test_password):
    email = 'user@example.com'
    user = create_user(email=email, password=test_password)
    return Post.objects.create(
        user=user,
        title='Test Post',
        description='Test Description',
        status='draft',
        number_likes=0,
    )


def test_post_form_valid():
    form_data = {
        'title': 'Valid Title',
        'description': 'Valid Description',
        'status': 'draft'
    }
    form = PostForm(data=form_data)
    assert form.is_valid()


def test_post_form_invalid():
    form_data = {
        'title': '',
        'description': 'Description'
    }
    form = PostForm(data=form_data)
    assert not form.is_valid()


def test_get_post_edit_view(client, one_post):
    url = reverse('edit_post', kwargs={'post_id': one_post.id})
    response = client.get(url)
    assert response.status_code == 200
    assert 'Test Post' in str(response.content)


def test_post_post_edit_view(client, one_post):
    url = reverse('edit_post', kwargs={'post_id': one_post.id})
    form_data = {
        'title': 'Updated Title',
        'description': 'Updated Description',
        'status': 'posted'
    }
    response = client.post(url, form_data)
    assert response.status_code == 302

    one_post.refresh_from_db()
    assert one_post.title == 'Updated Title'
    assert one_post.description == 'Updated Description'
    assert one_post.status == 'posted'


@override_settings(MEDIA_ROOT=BASE_DIR / 'posts/test_data/media/')
def test_post_create_view(client, create_user, test_password):
    email = 'user@example.com'
    user = create_user(email=email, password=test_password)
    client.force_login(user)
    url = reverse('new_post')

    form_data = {
        'title': 'New Title',
        'description': 'New Description',
        'status': 'posted'
    }
    response = client.post(url, form_data)
    assert response.status_code == 302

    post = Post.objects.get(title='New Title')

    assert post.description == 'New Description'
    assert post.status == 'posted'
    assert post.user == user
    assert post.number_likes == 0
    assert post.tags.count() == 0

    with open(BASE_DIR / 'posts/test_data/test_images/img1.jpg', 'rb') as img:
        image_data = {
            'post': post.id,
            'title': post.title,
            'description': post.description,
            'status': post.status,
            'image': img,
            'add_image': 'Add Image'
        }
        image_response = client.post(reverse('edit_post', kwargs={'post_id': post.id}), image_data, follow=True)
    assert image_response.status_code == 200
    post.refresh_from_db()
    assert post.image_set.count() == 1

    image = post.image_set.first()
    image_data = {
        'post': post.id,
        'title': post.title,
        'description': post.description,
        'status': post.status,
        'delete_image': image.id,
    }
    image_response = client.post(reverse('edit_post', kwargs={'post_id': post.id}), image_data, follow=True)
    assert image_response.status_code == 200
    post.refresh_from_db()
    assert post.image_set.count() == 0

