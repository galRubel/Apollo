

document.addEventListener('DOMContentLoaded', function () {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginForm = document.getElementById('loginForm');  
  
    loginForm.addEventListener('submit', async function (event) {
      event.preventDefault();
     
      console.log("Hola") // Prevent the form from submitting normally
    
      const res = await fetch("http://localhost:3000/iniciarsesion", {
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
     
      if (res.ok) {
        document.getElementById("message").innerText = "Login exitoso Token: " +data.authToken;
        //window.location.href = "file:///C:/Users/47866632/Downloads/Diana/form1.html";
    } else {
        document.getElementById("message").innerText = "Login no exitoso. " + data.message;
    }
   
    })
  })
  

