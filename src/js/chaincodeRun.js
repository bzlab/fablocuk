import { fabloArayuz } from "./fablo.js"
let url = localStorage.getItem("url")

let geriButton = document.getElementById("geriButton")
geriButton.addEventListener("click", () => {
    window.location.href = "../homepage/main.html"
})

let channelArr = JSON.parse(localStorage.getItem("channelId"))
let chaincodeArr = JSON.parse(localStorage.getItem("chaincodeId"))

if (channelArr) {
    for(let i = 0; i < channelArr.length; i++) {
        let channelOption = document.getElementById(`channel-${i}`)
        if (!channelOption) {
             channelOption = document.createElement("option")
             channelOption.id = `channel-${i}`
             channelOption.innerText = channelArr[i]
             document.getElementById("channelId").appendChild(channelOption)
        }
    }
}

if (chaincodeArr) {
    for(let i = 0; i < chaincodeArr.length; i++) {
        let chaincodeOption = document.getElementById(`chaincode-${i}`)
        if (!chaincodeOption) {
             chaincodeOption = document.createElement("option")
             chaincodeOption.id = `chaincode-${i}`
             chaincodeOption.innerText = chaincodeArr[i]
             document.getElementById("chaincodeId").appendChild(chaincodeOption)
        }
    }
}



let channelIdCreate =  document.getElementById("channelIdCreate")
let chaincodeIdCreate =  document.getElementById("chaincodeIdCreate")

channelIdCreate.addEventListener("click", () => {
    window.location.href = "../homepage/createChannelId.html"
})

chaincodeIdCreate.addEventListener("click", () => {
    window.location.href = "../homepage/createChaincodeId.html"
})

let chaincodeRunInvoke = document.getElementById("chaincodeRunInvoke")
let chaincodeRunQuery = document.getElementById("chaincodeRunQuery")

chaincodeRunInvoke.addEventListener("click", () => {
    let channelId = document.getElementById("channelId").value
    let chaincodeId = document.getElementById("chaincodeId")
    let method = document.getElementById("chaincodeMethod")
    let args = document.getElementById("argumans")
    args = args.value.split(",")
    console.log(channelId)
    console.log(method.value)
    console.log(args)
    fabloArayuz.chaincodeInvoke(url,channelId,chaincodeId.value,method.value,args)
    .then(
        (resObj) => {
            console.log(resObj)
            window.sessionStorage.setItem('jsonData',JSON.stringify(resObj,undefined,2))
            window.location.href = "../homepage/chaincodeRunResult.html"
        }
    ).catch(
        e => console.log(e)
    )
})

chaincodeRunQuery.addEventListener("click", () => {
    let channelId = document.getElementById("channelId").value
    let chaincodeId = document.getElementById("chaincodeId")
    let method = document.getElementById("chaincodeMethod")
    let args = document.getElementById("argumans")
    args = args.value.split(",")
    console.log(method.value)
    console.log(args)
    fabloArayuz.chaincodeQuery(url,channelId,chaincodeId.value,method.value,args)
    .then(
        (resObj) => {
            console.log(resObj)
            window.sessionStorage.setItem('jsonData',JSON.stringify(resObj,undefined,2))
            window.location.href = "../homepage/chaincodeRunResult.html"
        }
    )
})