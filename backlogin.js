// Import the required modules
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const express = require('express');
const app = express();
const cors = require("cors")
const port = process.env.PORT || 3000;
app.use(express.json());

app.use(cors())
app.get('/', (req, res) => {
  res.send('Hello, World!');
});
//AJAX
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, API!' });
});

app.get("/gal", (req, res) => {
  res.send("Hello Gal")
})

app.post("/registrarse.html", (req, res) => {
  const username = req.username;
  const pwd = req.password;
  const user = {
    "name": username,
    "password": pwd,
  }
  console.log(req.body)
  res.send(user)
})


// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:3000`);
});
