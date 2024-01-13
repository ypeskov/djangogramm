#!/usr/bin/env bash

PGSERVICE=$HOME/.pg_service.conf
export PGSERVICE

# Start the Django development server
python manage.py runserver
