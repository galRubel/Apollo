import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
const express = require('express');
const bcrypt = require('bcrypt');
const app = express();
const port = process.env.PORT || 3000;
const express = require("express");
app.use(express.json());
app.use(express.json());
app.get("/", (req, res) => {
    res.send("Hola!");
});

    //const user = await prisma.user.create({
      //data: {
      //  username,
       // password: hashedPassword,




// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
