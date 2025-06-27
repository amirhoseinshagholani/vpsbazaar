import mysql from 'mysql2/promise'

export const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'vpsbazaar',
  waitForConnections: true,
  connectionLimit: 10,
})
