const email = document.querySelector("#emailValue");
const password = document.querySelector("#passwordValue");

const buttonLogin = document.querySelector("#buttonVLogin")
const buttonRegister = document.querySelector("#buttonRegister")

if(buttonLogin) {
    buttonLogin.addEventListener("click", function() {
        console.log(email.value)
        console.log(password.value)
    })
}

if(buttonRegister) {
    buttonRegister.addEventListener("click", function() {
        window.location.href = "register.html"
    })
    
}
