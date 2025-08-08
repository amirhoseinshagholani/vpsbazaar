import mysql from 'mysql2/promise'

// export const db = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   password: '',
//   database: 'vpsbazaar',
//   waitForConnections: true,
//   connectionLimit: 10,
// })

export const db = mysql.createPool({
  host: '127.0.0.1',
  user: 'httpsvpsbazaar_db',
  password: '(u+VASbc4YRjg]pp',
  database: 'httpsvpsbazaar_db',
  waitForConnections: true,
  connectionLimit: 10,
})