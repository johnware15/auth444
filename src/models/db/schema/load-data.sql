INSERT INTO users
  (username, password)
VALUES
  ('aegon', '5bastard5'),
  ('daenarys', '86dragons'),
  ('tyrion', 'colt45imp');

INSERT INTO roles
  (name)
VALUES
  ('admin'),
  ('regular');

INSERT INTO user_roles
  (user_id, role_id)
VALUES
  (1, 2),
  (2, 2),
  (3, 2),
  (3, 1);

INSERT INTO contacts
  (name, phone)
VALUES
  ('Cersei', '415-439-0087'),
  ('Sansa', '510-213-6577'),
  ('Aria', '925-806-3441');
