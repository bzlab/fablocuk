
let createChannelId = document.getElementById("channelIdSubmit")
let channelId = document.getElementById("channelId")
let geriButton = document.getElementById("geriButton")
let channelArr = [ ]
geriButton.addEventListener("click", () => {
    window.location.href = "../homepage/chaincodeRun.html"
})

createChannelId.addEventListener("click", () => {
    if (localStorage.getItem("channelId")) {
        channelArr = JSON.parse(localStorage.getItem("channelId"))
        channelArr.push(channelId.value)
    }
    else {
        channelArr.push(channelId.value)
    }
    localStorage.setItem('channelId',JSON.stringify(channelArr))
    let channelIdSuccess = document.getElementById("channelIdSuccess")
    channelIdSuccess.style.display = "block"
    setTimeout(
        () => {
            channelIdSuccess.style.display = "none"
        }, 2500)
    
})