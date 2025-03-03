const form = document.getElementById("form");
const user = document.getElementById("username");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const email = document.getElementById("email");

user.addEventListener("input", function () {
    console.log(user.value);
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateInputs();
});

const validateInputs = function () {
    const usernameValue = user.value.trim();
    const passwordValue = password.value.trim();
    const confirmPasswordValue = confirmPassword.value.trim();
    const emailValue = email.value.trim();

    if (usernameValue === "")
        displayError(user, "Username is required");
    else setSuccess(user);

    if (emailValue === "")
        displayError(email, "Email is required");
    else if (!validateEmail(emailValue))
        displayError(email, "Invalid email address");
    else setSuccess(email);

    if (passwordValue === "")
        displayError(password, "Password is required");
    else if (!validatePassword(passwordValue))
        displayError(password, "Use Strong Password");
    else if (confirmPasswordValue === "")
        displayError(confirmPassword, "Confirm Password is required");
    else if (passwordValue !== confirmPasswordValue)
        displayError(confirmPassword, "Passwords do not match");
    else 
        {
            setSuccess(confirmPassword);
            setSuccess(password);
        }
};

const displayError = function (input, message) {
    const formControl = input.parentElement;
    const error = formControl.querySelector(".error");

    if (error) {
        error.innerHTML = message;
    }

    formControl.classList.add("Error");
    formControl.classList.remove("success");
};

const validateEmail = function (email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
};

const validatePassword = function (password) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password);
};

const setSuccess = function (input) {
    const formControl = input.parentElement;
    const error = formControl.querySelector(".error");

    if (error) {
        error.innerHTML = "";
    }

    formControl.classList.remove("Error");
    formControl.classList.add("success");
};
