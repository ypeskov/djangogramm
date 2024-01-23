import pytest


@pytest.mark.django_db
def test_home_page(client):
    response = client.get('/')
    assert response.status_code == 200
    assert 'Home - DjangoGram' in str(response.content)
