let fabloArayuz = {
  login: function (url, fabricId, fabricSecret) {
    let apiUrl = url + "/user/enroll";
    let data = { id: fabricId, secret: fabricSecret };
    console.log(data);
    fetch(apiUrl, {
      method: "POST",
      body: JSON.stringify({
        id: fabricId,
        secret: fabricSecret,
      }),
    }).then((res) => {
      let token = res.json().then((respObj) => {
        localStorage.setItem("token",respObj.token)
        localStorage.setItem("fabricId",fabricId)
        console.log(`token geldi mi ? ${respObj.token}`);
        return respObj.token
      })
      
    }).then(
      () => window.location.href = "../html/homepage/main.html"
    );
  },

  reenroll: async function (url) {
    let apiUrl = url + "/user/reenroll";
    let result = await fetch(apiUrl, {
      method: "POST",
      headers: {"Authorization": `Bearer ${localStorage.getItem("token")}`}
    })
    return result.json()
  },

  register: function (url, fabricId, fabricSecret) {
    let apiUrl = url + "/user/register";
    let data = { id: fabricId, secret: fabricSecret };
    console.log(data);
    let result = fetch(apiUrl, {
      method: "POST",
      headers: {"Authorization": `Bearer ${localStorage.getItem("token")}`},
      body: JSON.stringify({
        id: fabricId,
        secret: fabricSecret,
      }),
    })
    return result
  },

  
  listIdentities: async function(url, fabricId, token) {
    let apiUrl = url + "/user/identities"
    if (fabricId == "admin") {
        let response = await fetch(apiUrl, {
          headers: {"Authorization": `Bearer ${localStorage.getItem("token")}`}
        })
        return response.json() 
    }
  },

  chaincodeQuery: async function(url, channelId, chaincodeId, method, args) {
    let apiUrl = url + "/query/" + channelId + "/" + chaincodeId
    
    let response = await fetch(apiUrl, {
      method: "POST",
      headers: {"Authorization": `Bearer ${localStorage.getItem("token")}`},
      body: JSON.stringify({
        "method": method,
        "args": args,
      }),
    })
    return response.json()
  },

  chaincodeInvoke: async function(url, channelId, chaincodeId, method, args) {
    let apiUrl = url + "/invoke/" + channelId + "/" + chaincodeId
    let response = await fetch(apiUrl, {
      method: "POST",
      headers: {"Authorization": `Bearer ${localStorage.getItem("token")}`},
      body: JSON.stringify({
        "method": method,
        "args": args,
      }),
    })
    return response.json()
  }

};

export { fabloArayuz };
