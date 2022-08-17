import { fabloArayuz } from "./fablo.js"
    
    let fabricId = localStorage.getItem("fabricId")
    if (fabricId == "admin") {
        let userListDiv = document.getElementById("userListDiv")
        let url = localStorage.getItem("url")
        let token = localStorage.getItem("token")
        let geriButton = document.getElementById("geriButton")
        fabloArayuz.listIdentities(url, fabricId, token)
        .then(
            (resObj) => {
                console.log(resObj.response.identities)
                let userArr = resObj.response.identities
                for (let i = 0; i < userArr.length; i++) {
                    let userSpan = document.getElementById(`userSpan-${i}`)
                    if (!userSpan) {
                        userSpan = document.createElement("span")
                        userSpan.id = `userSpan-${i}`
                        userSpan.innerText = userArr[i].id
                        document.getElementById("userListId").appendChild(userSpan)
                    }
                    let userSpanType = document.getElementById(`userSpanType-${i}`)
                    if (!userSpanType) {
                        userSpanType = document.createElement("span")
                        userSpanType.id = `userSpanType-${i}`
                        userSpanType.innerText = userArr[i].type
                        document.getElementById("userListType").appendChild(userSpanType)
                    }
                }
    
            }
        )
        geriButton.addEventListener("click", () => {
            window.location.href = "../homepage/main.html"
        })
    }else {
        let userListContainer = document.getElementById("userListContainer")
        let erisimWarning = document.getElementById("erisimWarning")
        userListContainer.style.display = "none"
        erisimWarning.style.display = "block"
        erisimWarning.style.color = "brown"
        erisimWarning.style.fontWeight = "bold"
    }
    
