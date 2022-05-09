FROM python:3.10

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1

WORKDIR /dreamforskin

# RUN apk update \
#     && apk add postgresql-dev gcc python3-dev musl-dev

COPY . .
RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt 

# ENTRYPOINT [ "python", "manage.py"]
# CMD [ "runserver"]