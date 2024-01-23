import pytest
from django.test import Client


@pytest.fixture
def client():
    return Client()


@pytest.fixture(autouse=True)
def enable_db_access_for_all_tests(db):
    pass
