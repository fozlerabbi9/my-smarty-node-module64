const express = require('express')
const cors = require("cors");
const app = express()
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
  res.send('This is cool')
})

const users = [
  { id: 1, name: "Fozle Rabbi1 shu", email: "frabbi1@gmail.com", phone: "01743979797" },
  { id: 2, name: "Fozle Rabbi2 shuvo", email: "frabbi2@gmail.com", phone: "01743979797" },
  { id: 3, name: "Fozle Rabbi3", email: "frabbi3@gmail.com", phone: "01743979797" },
  { id: 4, name: "Fozle Rabbi4", email: "frabbi4@gmail.com", phone: "01743979797" },
  { id: 5, name: "Fozle Rabbi5 shuv", email: "frabbi5@gmail.com", phone: "01743979797" },
  { id: 6, name: "Fozle Rabbi6", email: "frabbi6@gmail.com", phone: "01743979797" },
]

app.get("/users", (req, res) => {
  // console.log("query", req.query);
  if (req.query.name) {
    const search = req.query.name.toLowerCase();
    const metched = users.filter(user => user.name.toLowerCase().includes(search))
    res.send(metched)
  }
  else {
    res.send(users);
  }
})

app.get("/user/:id", (req, res) => {
  console.log(req.params);
  const id = req.params.id;
  // const user = users[id];
  const user = users.find(u => u.id === parseInt(id))
  res.send(user);
  // res.send("finding user")
})

app.post("/user", (req, res) => {
  console.log('requist' + req.body);
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user)
})

app.get("/fruits", (req, res) => {
  res.send(["mango", "banana", "jacfruits", "oranges"])
})

app.get("/fruits/mango/orange", (req, res) => {
  res.send("shower shower orange flaver")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

