const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/hello', (req, res) => {
    res.send('Hello from Express!');
});

app.get('/user', (req, res) => {
    const firstName = req.query.firstName || 'Pritesh';
    const lastName = req.query.lastName || 'Patel';
    res.json({ firstName, lastName });
})

app.post("/user/:firstname/:lastname", (req, res) => {
  const { firstname, lastname } = req.params;
  res.json({ firstname, lastname });
});

app.post("/users", (req, res) => {
  const users = req.body; // array of objects [{firstname, lastname}, ...]
  res.json(users);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
