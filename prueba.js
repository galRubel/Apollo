require('dotenv').config()
const express = require("express");
const app = express();
app.use(express.json());


app.get("/", (req, res) => {
    res.send("Hola!");
});

app.get("/login", (req, res) => {
  // esto deberia ser prisma 
});
const searchItem = (id) => {
    return menu.find((item) => item.id === parseInt(id));
}
app.get("/menu/:id", (req, res) => {
    if (!req.params.id) {
        res.status(400).json({ msg: 'No se a recibido un ID' })
    }
    const id = req.params.id;
    const item = searchItem(id);
    if (!item) {
        return res.status(404).json({ msg: 'No se a recibido un plato en el menu' })
    }
    res.json(item);
});

app.use((req, res, next) =>{
    res.status(404).json({ msg: 'LA ruta no existe' });
});

app.get("/combos", (req, res) => {
    if (!combos) {
        res.status(404).json({ msg: 'No se a recibido un ID' })
    }
    res.status(404).json({ msg: 'Plato no encontrado' });
    res.json(menu.filter((item) => item.tipo === "combo"))
});
app.get("/postres", (req, res) => {
    res.json(menu.filter((item) => item.tipo === "postre"))
});
app.get("/principales", (req, res) => {
    res.json(menu.filter((item) => item.tipo === "principal"))
});

app.post("/pedido", (req, res) => {
    const ped = req.body;
    console.log(ped)
    let precio =  0 ;
  ped.productos.forEach(element => {
      let item = searchItem(element.id);
      precio += item.precio;
  });
     res.json({ msg: "Pedido recibido", precio: precio })
    if (!req.body) {
        return res.status(404).json({ msg: 'No se han encontrado tu plato' })
    }
   

});
app.listen(3000, () => {
    console.log("Escuchando!");
});
const mysql = require('mysql2')

// Create the connection to the database
const connection = mysql.createConnection(process.env.DATABASE_URL)

// simple query
connection.query('show tables', function (err, results, fields) {
  console.log(results) // results contains rows returned by server
  console.log(fields) // fields contains extra metadata about results, if available
})

// Example with placeholders
connection.query('select 1 from dual where ? = ?', [1, 1], function (err, results) {
  console.log(results)
})

connection.end()

