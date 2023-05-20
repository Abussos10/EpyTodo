const form = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const error = document.getElementById("error");
const success = document.getElementById("success");

// the form and prevent default are fixing a weird error
form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const login = {
        email: email.value,
        password: password.value
    }
    fetch("/login", { // Make sure to include the leading slash (/) for the route
        method: "POST",
        body: JSON.stringify(login),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json())
        .then(data => {
            if (data.status == "error") {
                success.style.display = "none";
                error.style.display = "block";
                error.innerText = data.error;
            } else {
                error.style.display = "none";
                success.style.display = "block";
                success.innerText = data.success;
            }
        })
});
