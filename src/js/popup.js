// Initialize butotn with users's prefered color
let urlSubmit = document.getElementById("urlSubmit");
if(!localStorage.getItem("url")) {
  urlSubmit.addEventListener("click", async () => {
    let urlInput = document.getElementById("urlInput");
    let url = urlInput.value;
    console.log(url)
    if (url != "http://localhost:8801") {
      let urlWarning = document.getElementById("urlWarning");
      urlWarning.style.display = "block";
    } else {
      let urlWarning = document.getElementById("urlWarning");
      localStorage.setItem("url",url)
      if (!localStorage.getItem("token"))
        window.location.href = "../html/login.html"
    else
        window.location.href = "../html/homepage/main.html"
    }
    
  });
}else {
  if (!localStorage.getItem("token"))
    window.location.href = "../html/login.html"
  else
    window.location.href = "../html/homepage/main.html"
}

