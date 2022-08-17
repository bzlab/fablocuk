
let createChaincodeId = document.getElementById("chaincodeIdSubmit")
let chaincodeId = document.getElementById("chaincodeId")
let geriButton = document.getElementById("geriButton")
let chaincodeArr = [ ]
geriButton.addEventListener("click", () => {
    window.location.href = "../homepage/chaincodeRun.html"
})

createChaincodeId.addEventListener("click", () => {
    if (localStorage.getItem("chaincodeId")) {
        chaincodeArr = JSON.parse(localStorage.getItem("chaincodeId"))
        chaincodeArr.push(chaincodeId.value)
    }
    else {
        chaincodeArr.push(chaincodeId.value)
    }
    localStorage.setItem('chaincodeId',JSON.stringify(chaincodeArr))
    let chaincodeIdSuccess = document.getElementById("chaincodeIdSuccess")
    chaincodeIdSuccess.style.display = "block"
    setTimeout(
        () => {
            chaincodeIdSuccess.style.display = "none"
        }, 2500)
    
})