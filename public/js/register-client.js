// Check if the current page is the registration page
if (window.location.pathname === "/register") {
  const form = document.getElementById("registerForm");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const name = document.getElementById("name");
  const firstname = document.getElementById("firstname");
  const error = document.getElementById("error");
  const success = document.getElementById("success");

  form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const registerData = {
          email: email.value,
          password: password.value,
          name: name.value,
          firstname: firstname.value
      };
      fetch("/api/register", {
              method: "POST",
              body: JSON.stringify(registerData),
              headers: {
                  "Content-Type": "application/json"
              }
          })
          .then((res) => res.json())
          .then((data) => {
              if (data.status === "error") {
                  success.style.display = "none";
                  error.style.display = "block";
                  error.innerText = data.error;
              } else {
                  error.style.display = "none";
                  success.style.display = "block";
                  success.innerText = data.message;
              }
          });
  });
}
