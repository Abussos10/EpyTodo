const sql       =       require("mysql2");
const dotenv    =       require("dotenv");
dotenv.config();

// db connection
const db = sql.createConnection({
    host:       process.env.MYSQL_HOST,
    user:       process.env.MYSQL_USER,
    password:   process.env.MYSQL_ROOT_PASSWORD,
    database:   process.env.MYSQL_DATABASE
});

// check if connection succeed
db.connect((err) => {
    if (err) {
      console.error("Error connecting to the database:", err);
      return;
    }
    console.log("Connected to the database!");
});
  
module.exports = db;