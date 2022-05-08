let image = document.getElementById('image')

function change() {
  if (image.getAttribute("src") = "Images/CC.png"){
    image.src = "images/discord.png"
  }else{
    image.src = "Images/CC.png"
  }
}

image.onclick = change