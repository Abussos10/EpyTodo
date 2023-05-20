const sql       =       require("mysql2");
const dotenv    =       require("dotenv");

dotenv.config();
console.log(process.env.DATABASE_HOST);
console.log(process.env.DATABASE_USER);
console.log(process.env.DATABASE_PASSWORD);
console.log(process.env.DATABASE);
const db = sql.createConnection({
    host:       process.env.DATABASE_HOST,
    user:       process.env.DATABASE_USER,
    password:   process.env.DATABASE_PASSWORD,
    database:   process.env.DATABASE
});

// Connect to the database
db.connect((err) => {
    if (err) {
      console.error("Error connecting to the database:", err);
      return;
    }
    console.log("Connected to the database!");
  });
  
  module.exports = db;