const db = require("../routes/db-config");

const getUser = async (req, res) => {
  try {
    const userId = req.params.id;
    // Fetch user information from the database
    const user = db.query("SELECT * FROM users WHERE id = ?", [userId]);

    if (user.length === 0) {
      return res.status(404).json({ error: "User not found" });
    }

    const userInfo = {
        id: user[0].id,
        email: user[0].email,
        password: user[0].password,
        created_at: user[0].created_at,
        firstname: user[0].firstname,
        name: user[0].name,
    };

    res.json(userInfo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = getUser;  