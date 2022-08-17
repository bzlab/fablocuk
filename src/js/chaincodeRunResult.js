let jsonData = document.getElementById("jsonData")

let geriButton = document.getElementById("geriButton")
geriButton.addEventListener("click", () => {
    window.location.href = "../homepage/chaincodeRun.html"
})

console.log(jsonData)
jsonData.innerHTML = window.sessionStorage.getItem("jsonData")