#!/bin/bash
set -e

psql --username "postgres" <<-EOSQL
    CREATE DATABASE finance OWNER postgres;
    GRANT ALL PRIVILEGES ON DATABASE finance TO postgres;
EOSQL
