#!/bin/bash
set -a
source .env
set +a
python manage.py migrate
