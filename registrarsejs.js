const loginForm = document.getElementById('loginForm');


  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const confirmpasswo = document.getElementById('confrimpassword').value;
  const boton = document.getElementById("button-crear");


boton.onclick = function() {
  if(password != confirmpasswo) {
    alert("No seas potz");
  } else{
    alert("Usuario registrado")
  }
} 
   
;
