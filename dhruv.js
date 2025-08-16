const items = document.querySelectorAll('.sctext');
let current = 0;

function rotateText() {
  items[current].classList.remove('active');
  const parent = items[current].parentNode;
  parent.appendChild(items[current]);
  current = 0;
  items[current].classList.add('active');
}

items[0].classList.add('active');
setInterval(rotateText, 2000);
