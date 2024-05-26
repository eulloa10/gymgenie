# start by pulling the python image
FROM python:3.9-alpine

# install system dependencies
RUN apk add --no-cache \
    gcc \
    musl-dev \
    geos-dev

# copy the requirements file into the image
COPY ./requirements.txt /app/requirements.txt

# switch working directory
WORKDIR /app

# install the dependencies and packages in the requirements file
RUN pip install --upgrade pip setuptools
RUN pip install --no-cache-dir -r requirements.txt


# copy every content from the local file to the image
COPY . /app

# set environment variables
ENV FLASK_APP=app.py
ENV FLASK_RUN_HOST=0.0.0.0

# run the application
CMD ["flask", "run"]
