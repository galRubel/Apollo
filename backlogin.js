// Import the required modules
const express = require('express');
const app = express();

const port = 3000; 
app.get('/', (req, res) => {
  res.send('Hello, World!');
});
//AJAX
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello, API!' });
  });
app.post("/auth/login", async (req, res) => {
  console.log(req.body)
  res.json({message: "HOLIS"})
})
  
// Start the server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on http://localhost:3000`);
});
