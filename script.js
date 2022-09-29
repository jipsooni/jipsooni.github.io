let i = 0

function addTextToTop() {


     const newParagraph = document.createElement("p")
     newParagraph.textContent = "This is a new paragraph!"
     document.body.prepend(newParagraph)
     if (i % 2 === 0) {
          newParagraph.style.setProperty("color", "red")
     } else {
          newParagraph.style.setProperty("color", "blue")
     }
}