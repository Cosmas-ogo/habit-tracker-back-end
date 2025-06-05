import db from "../connection.js";

export const dropTables = () => {
  return db
    .query(`DROP TABLE IF EXISTS habits;`)
    .then(() => db.query(`DROP TABLE IF EXISTS categories;`))
    .then(() => db.query(`DROP TABLE IF EXISTS users;`))
    .then(() => db.query(`DROP TABLE IF EXISTS pets;`));
};

export const createTables = () => {
  return db
    .query(
      `
      CREATE TABLE pets (
        pet_id SERIAL PRIMARY KEY,
        pet_name VARCHAR NOT NULL,
        pet_health INT NOT NULL,
        pet_happiness INT NOT NULL,
        pet_status VARCHAR,
        current_coin INT DEFAULT 200 NOT NULL,
        pet_birthday TIMESTAMP DEFAULT NOW()
      );
    `
    )
    .then(() =>
      db.query(`
        CREATE TABLE users (
          user_id SERIAL PRIMARY KEY,
          user_name VARCHAR NOT NULL,
          habits_tracked INT DEFAULT 0 NOT NULL,
          user_onboarded BOOLEAN DEFAULT FALSE NOT NULL,
          coins_earned INT DEFAULT 0 NOT NULL,
          coins_spent INT DEFAULT 0 NOT NULL,
          highest_streak INT DEFAULT 0 NOT NULL,
          bought_apple INT DEFAULT 0 NOT NULL,
          bought_strawberry INT DEFAULT 0 NOT NULL,
          bought_ice_cream INT DEFAULT 0 NOT NULL,
          bought_ball INT DEFAULT 0 NOT NULL,
          pet_id INT REFERENCES pets(pet_id)
        );
      `)
    )
    .then(() =>
      db.query(`
        CREATE TABLE habits (
          habit_id SERIAL PRIMARY KEY,
          habit_name VARCHAR NOT NULL,
          habit_frequency VARCHAR,
          habit_status VARCHAR,
          habit_added TIMESTAMP DEFAULT NOW(),
          habit_category VARCHAR NOT NULL,
          user_id INT REFERENCES users(user_id)
        );
      `)
    )
    .then(() =>
      db.query(`
        CREATE TABLE categories (
          category_id SERIAL PRIMARY KEY,
          category_name VARCHAR,
          user_id INT REFERENCES users(user_id)
        );
      `)
    );
};
