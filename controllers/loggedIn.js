const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  jwt.verify(token, "your_secret_key", (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid token" });
    }

    // Attach the user object to the request for further processing
    req.user = user;
    res.locals.user = JSON.stringify(user);
    next();
  });
};

module.exports = authenticateToken;