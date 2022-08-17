import { fabloArayuz } from "./fablo.js"

let fabricId = localStorage.getItem("fabricId")
if (fabricId == "admin") {
    let url = localStorage.getItem("url")
    let registerSubmit = document.getElementById("registerSubmit")
    let registerSuccess = document.getElementById("registerSuccess")
    let geriButton = document.getElementById("geriButton")
    

    registerSubmit.addEventListener("click", async () => {
        let fabricId = document.getElementById("fabricRegisterId")
        let fabricSecret = document.getElementById("fabricRegisterSecret")
        
            fabloArayuz.register(url,fabricId.value,fabricSecret.value)
            .then(res => res.json()
            .then(
                (resObj) => {
                    console.log(resObj.message)
                    if (resObj.message == "ok") {
                        registerSuccess.style.color = "green"
                        registerSuccess.style.display = "block"
                        registerSuccess.innerText = "Hesap basariyla olusturuldu!"
                    }
                    else {
                        registerSuccess.style.color = "brown"
                        registerSuccess.style.display = "block"
                        registerSuccess.innerText = "Bir sorunla karsilasildi!"
                    }
                }
            ))
            
    });

    geriButton.addEventListener("click", () => {
        window.location.href = "../homepage/main.html"
    })
}else {
    let registerContainer = document.getElementById("registerContainer")
    let erisimWarning = document.getElementById("erisimWarning")
    registerContainer.style.display = "none"
    erisimWarning.style.display = "block"
    erisimWarning.style.color = "brown"
    erisimWarning.style.fontWeight = "bold"
}

    
