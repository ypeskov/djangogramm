#!/usr/bin/env bash

source .env.test
export DB_USER
export DB_PASSWORD

pytest --cov=app --cov-report=term-missing --cov-fail-under=100
