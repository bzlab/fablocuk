let logoutBut = document.getElementById("logout")

logoutBut.addEventListener("click", () => {
    localStorage.removeItem("token")
    localStorage.removeItem("fabricId")
    localStorage.removeItem("chaincodeId")
    localStorage.removeItem("channelId")
    window.location.href = "../popup.html"
})