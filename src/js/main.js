import { fabloArayuz } from "./fablo.js"

let userListSubmit = document.getElementById("userListBut")
let registerSubmit = document.getElementById("registerUser")
let chaincodeSubmit = document.getElementById("chaincodeRun")
let fabricId = localStorage.getItem("fabricId")
let fabricIdSpan = document.getElementById("fabricIdSpan")
let url = localStorage.getItem("url")
fabricIdSpan.innerText = `Fabric ID: ${fabricId}`

fabloArayuz.reenroll(url)
    .then(
            (resObj) => {
                console.log(resObj)
                if (resObj.token != null) {
                    localStorage.setItem("token",resObj.token)
                }
                else {
                    localStorage.removeItem("token")
                    localStorage.removeItem("channelId")
                    localStorage.removeItem("chaincodeId")
                    window.location.href = "../html/login.html"
                }
            }
    )

if (fabricId == "admin") {
    userListSubmit.style.display = "block"
    registerSubmit.style.display = "block"
    userListSubmit.addEventListener("click", () => {
        window.location.href = "../homepage/userList.html"
    });
    
    registerSubmit.addEventListener("click", () => {
        window.location.href = "../homepage/register.html"
    });
}

chaincodeSubmit.addEventListener("click", () => {
    window.location.href = "../homepage/chaincodeRun.html"
});