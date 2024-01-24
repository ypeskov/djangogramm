#!/usr/bin/env bash

source .env.test
export DB_USER
export DB_PASSWORD

pytest -s --cov=./ --cov-report=term-missing --cov-fail-under=100
#pytest -s -v
