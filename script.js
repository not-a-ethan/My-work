let image = document.getElementById('image')

function change() {
  if (image.getAttribute(href) = "Images/CC.png"){
    image.setAttribute("src", "Images/discord.png")
  }else{
    image.setAttribute("src", "Images/CC.png")
  }
}

image.onclick = change