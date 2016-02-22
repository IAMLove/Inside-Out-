var blackCat = document.getElementById('black-cat');
blackCat.addEventListener('mouseover', blackCatFun, false);
blackCat.addEventListener('mouseout', blackCatNormal, false);

var cowCat = document.getElementById('cow-cat');
cowCat.addEventListener('mousedown', cowCatFun, false);
cowCat.addEventListener('mouseup', cowCatNormal, false);

var orangeCat = document.getElementById('orange-cat');
orangeCat.addEventListener('click', orangeCatFun, false);
orangeCat.addEventListener('dblclick', orangeCatNormal, false);

function blackCatFun() {
  var info = document.getElementById('black-cat-info');
  document.body.style.background = '#575757';
  info.style.display = 'block';
}
function blackCatNormal() {
  var info = document.getElementById('black-cat-info');
  document.body.style.background = '#FFFFFF';
  info.style.display = 'none';
}

function cowCatFun() {
  var info = document.getElementById('cow-cat-info');
  document.body.style.background = '#7A378B';
  info.style.display = 'block';
}
function cowCatNormal() {
  var info = document.getElementById('cow-cat-info');
  document.body.style.background = '#FFFFFF';
  info.style.display = 'none';
}

function orangeCatFun() {
  var info = document.getElementById('orange-cat-info');
  document.body.style.background = '#EED2EE';
  info.style.display = 'block';
}
function orangeCatNormal() {
  var info = document.getElementById('orange-cat-info');
  document.body.style.background = '#FFFFFF';
  info.style.display = 'none';
}