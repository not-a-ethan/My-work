let image = document.getElementById('image')

function change() {
  if (image.getAttribute("src") == "Images/CC.png"){
    image.src = "Images/Discord.png"
    image.alt = "Discord logo"
  }else{
    image.src = "Images/CC.png"
    image.alt = "Codecademy logo"
  }
}

image.onclick = change
