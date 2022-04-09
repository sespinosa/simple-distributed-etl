# etl-pipeline

## Dependencies
- Docker
- Nodejs
- Python
- Nginx


## How to run

First, this uses `docker-compose` for container orchestration,
you can start the stack with a single microservice instance like this:

```
$ docker-compose up
```

But if you want to spin the stack with multiple instances of the microservice container do this:

```
$ docker-compose up --scale microservice=5
```
