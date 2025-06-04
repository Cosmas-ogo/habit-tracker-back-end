import { Pool } from "pg";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ENV = process.env.NODE_ENV || "development";

const pathToCorrectEnvFile = path.resolve(__dirname, `../.env.${ENV}`);
dotenv.config({ path: pathToCorrectEnvFile });

if (!process.env.PGDATABASE) {
  throw new Error("No PGDATABASE configured");
}

const pool = new Pool();

export default pool;
