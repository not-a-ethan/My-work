let CC = document.getElementById('CC')
let discord = document.getElementById('discord')

CC.style.display = 'visible'
discord.style.display = 'none'

function change() {
  if (CC.style.display == 'none') {
    CC.style.display = 'flow'
    discord.style.display = 'none'
  }else{
    CC.style.display = 'none'
    discord.style.display = 'flow'
  }
}

CC.addEventListener('click', change)
discord.addEventListener('click', change)

CC.onclick = change()
discord.onclick = change()