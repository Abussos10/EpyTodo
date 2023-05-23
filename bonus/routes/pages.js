const express = require("express");
const router = express.Router();
const db = require("../routes/db-config");
const registerController = require("../controllers/register");
const loginController = require("../controllers/login");
const getUserData = require("../controllers/user");
const checkLoggedIn = require("../middlewares/checkLoggedIn");
const logout_handling = require('../middlewares/logout');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

  // GET {INDEX}    --- ROUTE
router.get("/", (req, res) => {
    res.render("index", {
        user: res.locals.user
    });
});

  // GET /register    --- PAGE + html
router.get("/register", (req, res) => {
    res.sendFile("register.html", {
        root: "./public/"
    });
});

  // GET /login    --- PAGE + html
router.get("/login", (req, res) => {
    res.sendFile("login.html", {
        root: "./public/"
    });
});

  // GET /user    --- PAGE + html
router.get('/user', checkLoggedIn, (req, res) => {
    const userId = req.params.id;
    if (!userId) {
        return res.redirect("/login");
    }
    getUserData(userId, (err, user) => {
        if (err) {
            console.error(err);
            return res.status(500).send('An error occurred while fetching user data.');
        }
        res.render('user', {
            user
        });
    });
});

  // GET /todos/:idOrEmail    --- ROUTE
router.get("/users/:idOrEmail", checkLoggedIn, (req, res) => {
    const idOrEmail = req.params.idOrEmail;
    const sql = 'SELECT * FROM users WHERE id = ? OR email = ?';
    const values = [idOrEmail, idOrEmail];
    db.query(sql, values, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('An error occurred while fetching user data.');
            return;
        }
        if (result.length === 0) {
            res.status(404).json({
                error: 'User not found.'
            });
            return;
        }
        const user = result[0];
        res.render('user.ejs', {
            user
        });
    });
});

  // GET /todos/:id    --- ROUTE
router.get("/todos/:id", checkLoggedIn, (req, res) => {
    const todoId = req.params.id;
    const sql = 'SELECT id, title, description, created_at, due_time, user_id, status FROM todo_table WHERE id = ?';
    const values = [todoId];
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An error occurred while fetching the todo.' });
        return;
      }
      if (result.length === 0) {
        res.status(404).json({ error: 'Todo not found.' });
        return;
      }
      const todo = result[0];
      res.json(todo);
    });
  });

    // DELETE /users/:id    --- ROUTE
  router.delete('/users/:id', checkLoggedIn, (req, res) => {
    const userId = req.params.id;

    db.query('DELETE FROM users WHERE id = ?', [userId], (error, result) => {
        if (error) throw error;

        if (result.affectedRows === 0) {
            return res.status(404).json({
                msg: "User with ID " + userId + "not found"
            });
        }

        return res.json({
            msg: "Successfully deleted record number: " + userId
        });
    });
});

  // DELETE /todos/:id    --- ROUTE
router.delete("/todos/:id", checkLoggedIn, (req, res) => {
    const todoId = req.params.id;
    const sql = 'DELETE FROM todo_table WHERE id = ?';
    const values = [todoId];
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An error occurred while deleting the todo.' });
        return;
      }
      if (result.affectedRows === 0) {
        res.status(404).json({ error: 'Todo not found.' });
        return;
      }
      res.json({ msg: `Successfully deleted record number: ${todoId}` });
    });
  });
  
  // PUT /users/:id    --- ROUTE
router.put('/users/:id', (req, res) => {
    const userId = req.params.id;
    let { email, password, firstname, name } = req.body;
    password = bcrypt.hashSync(password, 8);
    db.query(
      'UPDATE users SET email = ?, password = ?, firstname = ?, name = ? WHERE id = ?',
      [email, password, firstname, name, userId],
      (error, result) => {
        if (error) throw error;
        if (result.affectedRows === 0) {
          return res.status(404).json({ msg: `User with ID ${userId} not found` });
        }
        db.query('SELECT * FROM users WHERE id = ?', [userId], (err, rows) => {
          if (err) throw err;
          const updatedUser = rows[0];
          return res.json(updatedUser);
        });
      }
    );
  });  

  // PUT /todos/:id    --- ROUTE
router.put('/todos/:id', checkLoggedIn, (req, res) => {
    const { title, description, due_time, status } = req.body;
    const user_id = req.params.id;
    db.query(
      'INSERT INTO todo_table (title, description, due_time, user_id, status) VALUES (?, ?, ?, ?, ?)',
      [title, description, due_time, user_id, status],
      (err, results) => {
        if (err) {
          console.error(err);
          res.status(500).json({ error: 'An error occurred while creating the todo.' });
          return;
        }
        res.json({ message: 'Todo created successfully.' });
      }
    );
  });  

// POST route for registration
router.post("/register", registerController);

// POST route for login
router.post("/login", loginController);

// POST route for logout button
router.post('/logout', logout_handling);

module.exports = router;
