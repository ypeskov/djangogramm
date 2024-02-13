#!/usr/bin/env bash

# Load environment variables from .env.dev file
if [ -f .env.dev ]; then
    export $(cat .env.dev | sed 's/#.*//g' | xargs)
fi

# Start the Django development server
python manage.py runserver

