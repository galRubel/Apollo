document.addEventListener('DOMContentLoaded', function () {
  var username = "lu";
  var aa= document.getElementById('username').innerText ;
  var password = document.getElementById('password').textContent ;
  var crear = document.getElementById('button-crear') ;
  var message = document.getElementById('message') ;

  crear.addEventListener('click',async function (event) {
    event.preventDefault(); // Prevent the form from submitting normally
    const res = await fetch("http://localhost:3000/registrarse", {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })

    const data = await res.json();
    console.log(data) 
    console.log("a" + " " +username + "p" + password)
  })})
