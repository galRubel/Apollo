document.addEventListener('DOMContentLoaded', function () {
  var username = document.getElementById('username');
  var password = document.getElementById('password');
  var crear = document.getElementById('button-crear');
  var message = document.getElementById('message');

  crear.addEventListener('click',async function (event) {
    event.preventDefault(); // Prevent the form from submitting normally
    const res = await fetch("http://localhost:3000/registrarse.html", {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }).then((res)=>{
      const data = res.json();
      console.log(data) 
    })  
  })})
