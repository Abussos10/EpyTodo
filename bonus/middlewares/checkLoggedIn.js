const jwt = require("jsonwebtoken");

const checkLoggedIn = (req, res, next) => {
    const token = req.cookies.access_token;
    if (token) {
        jwt.verify(token, process.env.SECRET, (err, decodedToken) => {
            if (err) {
                res.clearCookie("access_token");
                res.status(401).json({
                    msg: "Token is not valid"
                });
            } else {
                req.userId = decodedToken.id;
                next();
            }
        });
    } else {
        next();
    }
};

module.exports = checkLoggedIn;