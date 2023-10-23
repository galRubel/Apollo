document.addEventListener('DOMContentLoaded', function () {
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
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
      })
    })

    const data = await res.json();
    console.log(data)
  })
})
