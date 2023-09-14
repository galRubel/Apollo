document.addEventListener("DOMContentLoaded", (event) => {
  const loginForm = document.getElementById('loginForm');
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const confirmpasswo = document.getElementById('confrimpassword').value;

  loginForm.addEventListener("submit", (event) => {
    console.log("Pssword: " + password)
    event.preventDefault();
    if (password === confirmpasswo && password != "") {
      alert(password + " " + confirmpasswo);
    }
    else {
      alert("Usuario refistrado ")
    }
  })
});


/*
boton.onclick = function() {
  if(password === confirmpasswo && password != "") {
    alert(password + " " + confirmpasswo);
  }
  else{
    alert("Usuario refistrado ")
  }
}
   */
