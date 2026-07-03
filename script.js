const loginForm = document.querySelector(".login");
const registerForm = document.querySelector(".register");

function showRegister() {
    loginForm.classList.remove("active");
    loginForm.classList.add("hide");

    setTimeout(() => {
        loginForm.style.display = "none";

        registerForm.style.display = "block";

        setTimeout(() => {
            registerForm.classList.remove("hide");
            registerForm.classList.add("active");
        }, 20);

    }, 300);
}

function showLogin() {
    registerForm.classList.remove("active");
    registerForm.classList.add("hide");

    setTimeout(() => {
        registerForm.style.display = "none";

        loginForm.style.display = "block";

        setTimeout(() => {
            loginForm.classList.remove("hide");
            loginForm.classList.add("active");
        }, 20);

    }, 300);
}

function togglePassword(id, button) {

    const input = document.getElementById(id);
    const icon = button.querySelector("i");

    if (input.type === "password") {
        input.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        input.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}

document.querySelectorAll("form").forEach(form => {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
    });
});

window.onload = () => {
    loginForm.style.display = "block";
    loginForm.classList.add("active");

    registerForm.style.display = "none";
    registerForm.classList.remove("active");
};