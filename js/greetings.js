const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) { 
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY, loginInput.value);
    paintGreeting()
};

function paintGreeting() {
    const name = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `Hello ${name}!`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
};

const localUsername = localStorage.getItem(USERNAME_KEY);

if (localUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreeting()
};




// if (localUsername === null) {
//     loginForm.addEventListener("submit", onLoginSubmit);
// } else {
//     loginForm.classList.add(HIDDEN_CLASSNAME);
//     const savedName = localStorage.getItem("username")
//     greeting.innerText = `${savedName}, What will do you do?`;
//     greeting.classList.remove(HIDDEN_CLASSNAME);
// }

