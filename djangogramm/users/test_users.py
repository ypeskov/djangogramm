from django.urls import reverse
from icecream import ic
from django.contrib.auth.models import User
from django.contrib.messages import get_messages

from registration.models import ActivationLink
from registration.services import register_user
from users.models import UserProfile


def test_user_profile_creation(create_user, client):
    user_email = 'user@example.com'
    user = register_user(user_email, 'password123')
    link = ActivationLink.objects.get(user_id=user.id)
    url = reverse('activate', kwargs={'link_hash': link.link_hash})
    response = client.get(url)
    assert response.status_code == 302
    assert response.url == reverse('profile')
    user = User.objects.get(id=user.id)
    assert user.is_active
    profile = UserProfile.objects.get(user_id=user.id)
    assert profile.user == user
    assert str(profile) == f'{user.username}\'s profile'


def test_user_login(create_user, client):
    user_email = 'user@example.com'
    user = create_user(email=user_email, password='password123')
    url = reverse('login')
    response = client.post(url, {'username': user.username, 'password': 'password123'})
    print(response.content.decode())
    assert response.status_code == 302
    assert response.url == reverse('home')
    assert user.is_authenticated
    assert user.is_active


def test_incorrect_user_login(create_user, client):
    user_email = 'user@example.com'
    user = create_user(email=user_email, password='password123')
    url = reverse('login')
    response = client.post(url, {'username': user.username, 'password': 'password1234'})
    assert response.status_code == 200
    assert 'Incorrect credentials' in response.content.decode()


def test_user_login_not_exists(client, create_user):
    url = reverse('login')
    user_email = 'user@example.com'
    user = create_user(email=user_email, password='password123')
    response = client.post(url, {'username': 'aaaa', 'password': 'password123'})
    assert response.status_code == 200
    assert 'Incorrect credentials' in response.content.decode()


def test_user_login_not_active(client, create_user):
    url = reverse('login')
    user_email = 'user@example.com'
    user = create_user(email=user_email, password='password123')
    user.is_active = False
    user.save()
    response = client.post(url, {'username': user.username, 'password': 'password123'})
    assert response.status_code == 200
    assert 'User is not active' in response.content.decode()


def test_user_logout(create_user, client):
    user_email = 'user@example.com'
    user = create_user(email=user_email, password='password123')
    url = reverse('login')
    response = client.post(url, {'username': user.username, 'password': 'password123'})
    assert response.status_code == 302
    assert response.url == reverse('home')

    url = reverse('logout')
    response = client.get(url)
    assert response.status_code == 302
    assert response.url == reverse('home')


def test_user_activate_incorrect_link(client, create_user):
    user_email = 'user@example.com'
    user = create_user(email=user_email, password='password123')
    url = reverse('activate', kwargs={'link_hash': 'aaaa'})
    response = client.get(url)
    assert list(get_messages(response.wsgi_request))[0].message == 'Activation link is invalid or expired.'
    assert response.status_code == 200


def test_user_profile_update_view(client, create_user):
    user_email = 'user@example.com'
    user = create_user(email=user_email, password='password123')
    user_profile = UserProfile.objects.create(user=user)
    client.login(username=user.username, password='password123')

    url = reverse('profile')
    data = {
        'first_name': 'NewFirstName',
        'last_name': 'NewLastName',
        'bio': 'NewBio',
    }
    response = client.post(url, data)

    user.refresh_from_db()
    user_profile = UserProfile.objects.get(user=user)
    assert user.first_name == 'NewFirstName'
    assert user.last_name == 'NewLastName'
    assert user_profile.bio == 'NewBio'
    assert user_profile.user == user
    assert response.status_code == 302
    assert response.url == reverse('profile')

