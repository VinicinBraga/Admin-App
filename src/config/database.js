const postgres = require("postgres");

require("dotenv/config");

module.exports = {
  dialect: "postgres",
  host: postgres.env.DB_HOST,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  define: {
    timestamp: true,
    undescored: true,
    undescoredAll: true,
  },
};
