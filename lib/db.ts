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
  host: 'localhost',
  user: 'httpsvpsbazaar_db',
  password: '(u+VASbc4YRjg]pp',
  database: 'httpsvpsbazaar_website',
  waitForConnections: true,
  connectionLimit: 10,
})