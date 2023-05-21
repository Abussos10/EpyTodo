const db = require("../routes/db-config");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
    const {
        email,
        password: Npassword,
        name,
        firstname
    } = req.body;
    if (!email || !name || !firstname || !Npassword) {
        return res.json({
            status: "error",
            error: "Please enter your email, password, name, and firstname"
        });
    } else {
        db.query('SELECT email FROM users WHERE email = ?', [email], async (err, result) => {
            if (err) throw err;
            if (result[0]) {
                return res.json({
                    status: "error",
                    error: "Account already exists"
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
                    return res.json({ status: "success", message: "User has been registered" });
                });
            }
        });
    }
};

module.exports = register;