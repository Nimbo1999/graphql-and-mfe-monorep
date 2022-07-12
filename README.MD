## Docker Setup

# 1. Create the image with

```
docker image build . -t postgres-db
```

# 2. Create docker container with
```
docker run --name postgres-db -p 5432:5432 -e POSTGRES_PASSWORD=123456 -d postgres-db
```
