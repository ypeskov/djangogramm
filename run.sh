#!/usr/bin/env bash

if [ "$1" == "dev" ]; then
    docker-compose -f Dockerfiles/docker-compose.dev.yaml --env-file=Dockerfiles/env.dev up --build
else
    docker-compose -f Dockerfiles/docker-compose.yaml --env-file=Dockerfiles/env.prod up --build
fi

