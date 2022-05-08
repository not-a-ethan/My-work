let image = document.getElementById('image')

function change() {
  if (image.getAttribute(href) = "Images/CC.png"){
    image.setAttribute(href, Images/discord.png)
  }else{
    image.setAttribute(href, Images/CC.png)
  }
}

image.onclick = change()