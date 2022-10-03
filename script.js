let toggle = document.querySelector("dark-mode-toggle")
toggle.addEventListener("click", () => {
     if (toggle.checked) {
          document.body.style.setProperty("background", "#2d334a")
     } else {
          document.body.style.setProperty("background", "#fffffe")
     }
})