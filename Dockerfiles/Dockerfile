####### Development stage ######
FROM python:3.12-bullseye as dev

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

WORKDIR /app

COPY ../requirements.txt /app/

RUN pip install --no-cache-dir -r requirements.txt

RUN pip install debugpy

COPY ./djangogramm /app

EXPOSE 8000

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]

###### Production stage ######
FROM python:3.12.1-slim-bullseye as prod

WORKDIR /app

COPY --from=dev /app /app

RUN apt-get update && apt-get install -y gcc libpq-dev

RUN pip install --no-cache-dir -r requirements.txt

EXPOSE 8000

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
