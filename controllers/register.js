const db = require("../routes/db-config");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
    const {
        email,
        password: Npassword,
        name,
        firstname
    } = req.body;
    db.query('SELECT email FROM users WHERE email = ?', [email], async (err, result) => {
        if (err) throw err;
        if (result[0]) {
            return res.json({
                msg: "Account already exists"
            });
        } else {
            const hashedPassword = await bcrypt.hash(Npassword, 8);
            const userData = {
                email: email,
                password: hashedPassword,
                name: name,
                firstname: firstname
            };
            db.query('INSERT INTO users SET ?', userData, (error, results) => {
                if (error) throw error;
                return res.json({
                    token: "Token of the newly registered user"
                });
            });
        }
    });
};

module.exports = register;