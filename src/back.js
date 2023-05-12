const sqlite3 = require("sqlite3");
const cors = require("cors");
const express = require("express");

const db = new sqlite3.Database("bagremarBetDB.db");
const app = express();
const port = 3005;
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

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

// app.post("/api/send_balance", (req, res) => {
//   const userId = req.body.data.balance;
//   console.log(`Received balance request for user ${userId}`);
//   db;
// });

app.post("/api/send_balance", (req, res) => {
  db.run("UPDATE users SET balance = ? WHERE id = ?", [50, 1], (err) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.sendStatus(200);
    }
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
