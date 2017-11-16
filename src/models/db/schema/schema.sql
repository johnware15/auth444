DROP TABLE IF EXISTS contacts;
CREATE TABLE contacts (
  id serial primary key,
  name varchar(255) NOT NULL,
  phone varchar(255)
);

DROP TABLE IF EXISTS users;
CREATE TABLE users (
  id serial primary key,
  username VARCHAR(255),
  password VARCHAR(255)
);

DROP TABLE IF EXISTS roles;
CREATE TABLE roles (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) UNIQUE NOT NULL
);

DROP TABLE IF EXISTS user_roles;
CREATE TABLE user_roles (
  user_id INTEGER REFERENCES users(id),
  role_id INTEGER REFERENCES roles(id)
);

DROP TABLE user_sessions;
CREATE TABLE user_sessions (
  "sid" varchar NOT NULL COLLATE "default",
        "sess" json NOT NULL,
        "expire" timestamp(6) NOT NULL
)

WITH (OIDS = FALSE);
ALTER TABLE "user_sessions" ADD CONSTRAINT "session_pkey" PRIMARY KEY ("sid") NOT DEFERRABLE INITIALLY IMMEDIATE;
