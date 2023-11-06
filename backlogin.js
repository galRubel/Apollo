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
const jwt = require('jsonwebtoken');
const JWT_SECRET = '1342';

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

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
    const authToken = generateAuthToken();
    res.cookie('auth_token', authToken, {
      maxAge: 10800, // 3 horas 
      httpOnly: true,
    
    });

    res.json(newUser, authToken)
  }

})
app.post("/iniciarsesion", async (req, res) => {
  const username = req.body.username;
  const pwd = req.body.password;

  try {
    const user = await prisma.user.findUnique({ where: { usuario: username } });

    if (!user) {
      return res.status(401).json({ message: 'Usuaruio no encontrado' });
    }
    console.log(user.password)
    console.log(pwd)
    const saltRounds = 10; // You can adjust the number of rounds as needed (higher is more secure but slower)
    const hashedPassword = await bcrypt.hash(pwd, saltRounds)
    const data = await bcrypt.compare(user.password,hashedPassword);
    console.log(data);
    if (!data) {
      return res.status(401).json({ message: 'Contraseña Incorrecta' });
    }

   
    const authToken =jwt.sign({ userId: user.id, username: user.username }, JWT_SECRET);
    res.cookie('auth_token', authToken, {
      maxAge: 10800, // 30 days
      httpOnly: true,
    });
    console.log(authToken);
    res.json({authToken })
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: 'Error del servidor' });
  }
}
);


app.listen(port, () => {
  console.log(`Servernmjh is running on http://localhost:3000`);
});
function generateAuthToken() {
  return ;}



