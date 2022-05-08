let image = document.getElementById('image')

function change() {
  if (image.getAttribute("src") == "Images/CC.png"){
    image.src = "Images/Discord.png"
  }else{
    image.src = "Images/CC.png"
  }
}

image.onclick = change
