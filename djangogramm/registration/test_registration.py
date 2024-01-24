import pytest

from django.urls import reverse
from icecream import ic
from django.contrib.auth.models import User

from registration.models import ActivationLink
from registration.services import register_user, generate_activation_hash


def test_activation_link_creation(mailoutbox):
    user_email = 'user@example.com'
    user = register_user(user_email, 'password123')
    assert not user.is_active

    mail = mailoutbox[0]
    assert mail.subject == 'Djangogramm - Account Activation'
    assert mail.to == [user_email]

    user = User.objects.get(id=user.id)
    link = ActivationLink.objects.get(user_id=user.id)
    assert link.user == user
    assert str(link) == f'ActivationLink {link.id}'


def test_generate_activation_hash(create_user):
    user = create_user(email='user@example.com', password='password123')
    hash1 = generate_activation_hash(user)
    hash2 = generate_activation_hash(user)
    assert hash1 != hash2


def test_register_view_get(client):
    url = reverse('register')
    response = client.get(url)
    assert response.status_code == 200
    assert 'form' in response.context


def test_register_view_post(client):
    url = reverse('register')
    data = {'email': 'newuser@example.com', 'password': 'password', 'password2': 'password'}
    response = client.post(url, data)
    assert response.status_code == 302
    assert User.objects.filter(email='newuser@example.com').exists()
    assert response.url == reverse('success-url')


def test_register_error_user_register(client):
    url = reverse('register')
    data = {'email': 'newuser@example.com', 'password': 'pa', 'password2': 'pa'}
    response = client.post(url, data)
    assert response.status_code == 200
    assert not User.objects.filter(email='newuser@example.com').exists()
    assert 'form' in response.context
    assert 'This password is too short' in response.content.decode()


def test_register_error_user_exists(client, create_user):
    email = 'user@example.com'
    url = reverse('register')
    create_user(email=email, password='password123')
    data = {'email': email, 'password': 'password', 'password2': 'password'}
    response = client.post(url, data)
    assert response.status_code == 200
    assert 'form' in response.context
    assert 'Email is already used' in response.content.decode()


def test_register_error_passwords_dont_match(client):
    url = reverse('register')
    data = {'email': 'user@example.com', 'password': 'password', 'password2': 'password123'}
    response = client.post(url, data)
    assert response.status_code == 200
    assert 'form' in response.context
    assert "The two password fields didn&#x27;t match." in response.content.decode()
