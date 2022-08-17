import { fabloArayuz } from "./fablo.js"

let url = localStorage.getItem("url")
let geriButton = document.getElementById("geriButton")
let loginWarning = document.getElementById("loginWarning")

if (!localStorage.getItem("token")) {
    let loginSubmit = document.getElementById("loginSubmit")
    
    loginSubmit.addEventListener("click", () => {
        let fabricId = document.getElementById("fabricId")
        let fabricSecret = document.getElementById("fabricSecret")
        if (fabricId.value && fabricSecret.value) {
            fabloArayuz.login(url,fabricId.value,fabricSecret.value)
        }
        else {
            loginWarning.style.display = "block"
        }
        
    });
    
}

geriButton.addEventListener("click", () => {
    localStorage.removeItem("url")
    window.location.href = "../html/popup.html"
})




