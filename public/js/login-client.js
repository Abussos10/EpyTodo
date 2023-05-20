const form = document.getElementById("loginForm");

// the form and prevent default are fixing a weird error
form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const login = {
        email: email.value,
        password: password.value
    }
    fetch("/api/login", {
        method: "POST",
        body: JSON.stringify(login),
        headers: {
            "Content-Type": "application/json"
        }
    }).then(res => res.json())
        .then(data => {
            if (data.status == "error") {
                success.style.display = "none"
                error.style.display = "block"
                error.inneText = data.error
            } else {
                error.style.display = "none"
                success.style.display = "block"
                error.innerText = data.success
            }
        })
})
