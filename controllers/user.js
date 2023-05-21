const db = require("../routes/db-config");
const jwt = require("jsonwebtoken");

const getUserData = (userId, callback) => {
    const sql = 'SELECT * FROM users WHERE id = ?';
    db.query(sql, [userId], (err, result) => {
        if (err) {
            return callback(err);
        }
        if (!result[0]) {
            return callback("User not found");
        }
        callback(null, result[0]);
    });
};

module.exports = getUserData;