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

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}