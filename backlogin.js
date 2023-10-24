// Import the required modules
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const express = require('express');
const app = express();
const cors = require("cors")
const bcrypt = require("bcrypt")
const port = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());

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

app.post("/registrarse", async (req, res) => {
  const username = req.body.username;
  const pwd = req.body.password;
  const confPwd = req.body.confirmPassowrd;
  const user = {
    "username": username,
    "password": pwd,
    "confirmPassowrd": confPwd
  }
  console.log(user);
  if (confPwd !== pwd) {
    res.status(404).json({ msg: 'No seas potz' })
  }
  else {
    console.log(req.body)
    const newUser = await prisma.user.create({
      data: {
        usuario: username,
        password: pwd,

      }
    });
    res.json(newUser)
  }

})
app.post("/iniciarsesion", async (req, res) => {
  const username = req.body.username;
  const pwd = req.body.password;
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const user = await prisma.user.findUnique({ where: { usuario: username } });

    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ message: 'Incorrect password' });
    }

    const token = jwt.sign({ userId: user.id, username: user.username }, JWT_SECRET);

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
}
);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:3000`);
});
