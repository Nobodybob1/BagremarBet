const sqlite3 = require("sqlite3");
const cors = require("cors");
const express = require("express");

const db = new sqlite3.Database("bagremarBetDB.db");
const app = express();
const port = 3005;
var test = {};
app.use(cors());

app.get("/api/balance", (req, res) => {
  db.get(
    "SELECT balance FROM users WHERE id = ?",
    [req.query.userId],
    (err, row) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else if (!row) {
        res.status(404).json({ error: "User not found" });
      } else {
        res.json({ balance: row.balance });
      }
    }
  );
});

app.get("/api/get_user_by_credentials", (req, res) => {
  db.get(
    "SELECT id FROM users WHERE username = ? AND password = ?",
    [req.query.username, req.query.password],
    (err, row) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else if (!row) {
        res.status(404).json({ error: "User not found" });
      } else {
        res.json({ id: row.ID });
        test = row.ID;
        console.log(row.ID);
      }
    }
  );
});

app.get("/api/send_balance", (req, res) => {
  console.log(`Received balance request with value: ${req.query.balance}`);
  db.run(
    "UPDATE users SET balance = ? WHERE id = ?",
    [req.query.balance, test],
    (err) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.sendStatus(200);
      }
    }
  );
});

app.get("/api/create_user", (req, res) => {
  console.log(`Received balance request with value: ${req.query.balance}`);
  db.run(
    "INSERT INTO users (USERNAME, EMAIL, PASSWORD, balance) VALUES (?, ?, ?, ?)",
    [
      req.query.username,
      req.query.email,
      req.query.password,
      req.query.balance,
    ],
    (err) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.sendStatus(200);
      }
    }
  );
});

app.get("/api/get_user_id", (req, res) => {
  res.json({ user_id: test });
});

app.get("/api/store_user_id", (req, res) => {
  test = req.query.userId;
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
