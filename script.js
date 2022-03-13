let CC = document.getElementById('CC')
let discord = document.getElementById('discord')

CC.style.visibility = 'visible'
discord.style.visibility = 'hidden'

function change() {
  if (CC.style.visibility == 'hidden') {
    CC.style.visibility = 'visible'
    discord.style.visibility = 'hidden'
  }else{
    CC.style.visibility = 'hidden'
    discord.style.visibility = 'visible'
  }
}

CC.addEventListener('click', change)
discord.addEventListener('click', change)

CC.onclick = change()
discord.onclick = change()