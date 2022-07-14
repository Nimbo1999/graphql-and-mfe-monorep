## Docker Setup

# 1. Create the image with

```
docker build -t graphql-backend -f Dockerfile.backend .
```

```
docker image build -t postgres-db -f Dockerfile.database .
```

# 2. Create docker container with
```
docker run --name postgres-db -p 5432:5432 -e POSTGRES_PASSWORD=123456 -d postgres-db
```
