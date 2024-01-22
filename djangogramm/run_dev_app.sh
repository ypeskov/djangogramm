#!/usr/bin/env bash

ENV_FILE=.env.dev
export ENV_FILE

# Start the Django development server
python manage.py runserver

unset ENV_FILE
