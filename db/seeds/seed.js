import { dropTables, createTables } from "./manage-tables.js";
import {
  insertPets,
  insertUsers,
  insertCategories,
  insertHabits,
} from "./insert-data.js";

const seed = ({ category_data, habit_data, pet_data, user_data }) => {
  return dropTables()
    .then(() => createTables())
    .then(() => insertPets(pet_data))
    .then(() => insertUsers(user_data))
    .then(() => insertCategories(category_data))
    .then(() => insertHabits(habit_data));
};

export default seed;
