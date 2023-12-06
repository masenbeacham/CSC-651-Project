require("dotenv").config();
const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
});

async function executeQuery(sql) {
    try {
      const connection = await pool.getConnection();
      const [rows] = await connection.query(sql);
      connection.release(); // Release the connection back to the pool
      return rows;
    } catch (error) {
      throw error;
    }
}

module.exports = pool.promise();