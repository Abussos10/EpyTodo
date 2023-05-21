const jwt = require("jsonwebtoken");
const db = require("../routes/db-config");
const bcrypt = require("bcryptjs");

const login = async (req, res) => {
    const {
        email,
        password
    } = req.body;
    db.query('SELECT * FROM users WHERE email = ?', [email], async (err, result) => {
        if (err) throw err;
        if (!result[0] || !(await bcrypt.compare(password, result[0].password))) {
            return res.json({
                msg: "Invalid Credentials",
            });
        } else {
            const token = jwt.sign({
                id: result[0].id
            }, process.env.SECRET, {
                expiresIn: process.env.JWT_EXPIRES,
            });
            const cookieOptions = {
                expiresIn: new Date(Date.now() + process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
                httpOnly: true,
                samesite: 'secure',
            };
            res.cookie("access_token", token, cookieOptions);
            return res.json({
                token: "Token of the newly logged in user"
            });
        }
    });
};

module.exports = login;