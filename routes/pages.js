const express = require("express");
const router = express.Router();
const db = require("../routes/db-config");
const registerController = require("../controllers/register");
const loginController = require("../controllers/login");
const getUserData = require("../controllers/user");
const checkLoggedIn = require("../middlewares/checkLoggedIn");
const jwt = require("jsonwebtoken");

// GET {INDEX}    --- ROUTE
router.get("/", (req, res) => {
    res.send("This is the only backend version of my project");
});

// GET /user    --- PAGE + html
router.get("/user", checkLoggedIn, (req, res) => {
    const userId = req.userId;
    getUserData(userId, (err, user) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Internal server error");
        }
        const userData = {
            id: user.id,
            email: user.email,
            password: user.password,
            created_at: user.created_at,
            firstname: user.firstname,
            name: user.name
        };
        res.json(userData);
    });
});

// GET /todos/:idOrEmail    --- ROUTE
router.get("/users/:idOrEmail", checkLoggedIn, (req, res) => {
    const idOrEmail = req.params.idOrEmail;
    const sql = "SELECT * FROM users WHERE id = ? OR email = ?";
    const values = [idOrEmail, idOrEmail];
    db.query(sql, values, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Internal server error");
        }
        if (result.length === 0) {
            res.status(404).json({
                msg: "Not found"
            });
            return;
        }
        const user = result[0];
        const responseBody = {
            id: user.id,
            email: user.email,
            password: user.password,
            created_at: user.created_at,
            firstname: user.firstname,
            name: user.name
        };
        res.json(responseBody);
    });
});

// GET /todos/:id    --- ROUTE
router.get("/todos/:id", checkLoggedIn, (req, res) => {
    const todoId = req.params.id;
    const sql = "SELECT id, title, description, created_at, due_time, user_id, status FROM todo_table WHERE id = ?";
    const values = [todoId];
    db.query(sql, values, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({
                error: "An error occurred while fetching the todo."
            });
            return;
        }
        if (result.length === 0) {
            res.status(404).json({
                error: "Todo not found."
            });
            return;
        }
        const todo = result[0];
        res.json(todo);
    });
});

// DELETE /users/:id    --- ROUTE
router.delete("/users/:id", checkLoggedIn, (req, res) => {
    const userId = req.params.id;
    db.query("DELETE FROM users WHERE id = ?", [userId], (error, result) => {
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
    const sql = "DELETE FROM todo_table WHERE id = ?";
    const values = [todoId];
    db.query(sql, values, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({
                error: "An error occurred while deleting the todo."
            });
            return;
        }
        if (result.affectedRows === 0) {
            res.status(404).json({
                error: "Todo not found."
            });
            return;
        }
        res.json({
            msg: "Successfully deleted record number: " + todoId
        });
    });
});

// PUT /users/:id    --- ROUTE
router.put("/users/:id", (req, res) => {
    const userId = req.params.id;
    const {
        email,
        password,
        firstname,
        name
    } = req.body;
    db.query(
        "UPDATE users SET email = ?, password = ?, firstname = ?, name = ? WHERE id = ?",
        [email, password, firstname, name, userId],
        (error, result) => {
            if (error) throw error;
            if (result.affectedRows === 0) {
                return res.status(404).json({
                    msg: "Not Found"
                });
            }
            db.query("SELECT id, email, password, created_at, firstname, name FROM users WHERE id = ?", [userId], (err, rows) => {
                if (err) throw err;
                const updatedUser = rows[0];
                return res.json(updatedUser);
            });
        }
    );
});


// PUT /todos/:id    --- ROUTE
router.put("/todos/:id", checkLoggedIn, (req, res) => {
    const todoId = req.params.id;
    const {
        title,
        description,
        due_time,
        user_id,
        status
    } = req.body;
    db.query(
        "UPDATE todo_table SET title = ?, description = ?, due_time = ?, user_id = ?, status = ? WHERE id = ?",
        [title, description, due_time, user_id, status, todoId],
        (err, results) => {
            if (err) {
                console.error(err);
                res.status(404).json({
                    error: "Not Found"
                });
                return;
            }
            res.json({
                title,
                description,
                due_time,
                user_id,
                status
            });
        }
    );
});

// POST /todos    --- ROUTE
router.post('/todos', checkLoggedIn, (req, res) => {
    const {
        title,
        description,
        due_time,
        user_id,
        status
    } = req.body;
    const sql = 'INSERT INTO todo_table (title, description, created_at, due_time, user_id, status) VALUES (?, ?, CURRENT_TIMESTAMP, ?, ?, ?)';
    const values = [title, description, due_time, user_id, status];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({
                error: 'An error occurred while creating the todo.'
            });
            return;
        }

        const createdTodo = {
            id: result.insertId,
            title,
            description,
            created_at: new Date().toISOString().replace("T", " ").slice(0, 19),
            due_time,
            user_id,
            status
        };

        res.json(createdTodo);
    });
});


// POST route for registration
router.post("/register", registerController);

// POST route for login
router.post("/login", loginController);

module.exports = router;