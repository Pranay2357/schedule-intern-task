const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "your_password_here",
  database: "doctor_db",
  port: 5432,
});

pool.connect()
  .then(() => console.log("Postgres connected successfully"))
  .catch(err => console.error("Postgres connection error", err));

module.exports = pool;
