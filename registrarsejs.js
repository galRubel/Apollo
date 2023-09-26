// import { PrismaClient } from '@prisma/client'
// const prisma = new PrismaClient()
const bcrypt = require("bcrypt")
bcrypt.genSalt(10, (err, salt) => {

})
document.addEventListener("DOMContentLoaded", (event) => {
  const loginForm = document.getElementById('loginForm');
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const confirmpasswo = document.getElementById('confrimpassword').value;

bcrypt.hash(password, salt, function (err, hash) {
  if (err) {
    return console.log(err)
  }

  const newUser = await prisma.username.create({
    data: {
      usuario: username,
      password:
        hash
    }
  })

  console.log(newUser);
})}); 