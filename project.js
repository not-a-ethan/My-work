const cc = document.getElementsByClassName('gh-Button');

function clickCC() {
  location.href = 'https://github.com/Coin-Catalog';
}

// Event listeners for the var `cc` and its children
for (let i = 0; i < cc.length; i++) {
  cc[i].addEventListener('click', clickCC);
}