CREATE DATABASE soccer;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS players (
    id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
    code SERIAL,
    name VARCHAR NOT NULL,
    position VARCHAR,
    team VARCHAR,
    PRIMARY KEY(id)
);

