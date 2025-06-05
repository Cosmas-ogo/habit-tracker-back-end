import format from "pg-format";
import db from "../connection.js";

export const insertPets = (pet_data) => {
  const queryStr = format(
    `INSERT INTO pets (pet_name, pet_health, pet_happiness) VALUES %L;`,
    pet_data.map(({ pet_name, pet_health, pet_happiness }) => [
      pet_name,
      pet_health,
      pet_happiness,
    ])
  );
  return db.query(queryStr);
};

export const insertUsers = (user_data) => {
  const queryStr = format(
    `INSERT INTO users (user_name, pet_id) VALUES %L;`,
    user_data.map(({ user_name, pet_id }) => [user_name, pet_id])
  );
  return db.query(queryStr);
};

export const insertCategories = (category_data) => {
  const queryStr = format(
    `INSERT INTO categories (category_name, user_id) VALUES %L;`,
    category_data.map(({ category_name, user_id }) => [category_name, user_id])
  );
  return db.query(queryStr);
};

export const insertHabits = (habit_data) => {
  const queryStr = format(
    `INSERT INTO habits (habit_name, habit_frequency, habit_status, habit_category, user_id) VALUES %L;`,
    habit_data.map(
      ({
        habit_name,
        habit_frequency,
        habit_status,
        habit_category,
        user_id,
      }) => [habit_name, habit_frequency, habit_status, habit_category, user_id]
    )
  );
  return db.query(queryStr);
};
