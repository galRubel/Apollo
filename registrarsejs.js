document.addEventListener('DOMContentLoaded', function () {
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const confrimpasswordInput = document.getElementById('confirmpassword');
  const loginForm = document.getElementById('loginForm');
  const message = document.getElementById('message');

  loginForm.addEventListener('submit', async function (event) {
    event.preventDefault(); // Prevent the form from submitting normally
    const res = await fetch("http://localhost:3000/registrarse", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: usernameInput.value,
        password: passwordInput.value,
        confirmPassowrd: confrimpasswordInput.value
      })
    })

    const data = await res.json();
    if(res.ok){
      alert("nombre: " + data.username + " apellido: " + data.password)
      

    } else {
      alert("fue "+ data.msg)
    }
  })
})
