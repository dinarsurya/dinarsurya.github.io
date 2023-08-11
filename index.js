function innerHtml(target, html) {
  document.getElementById(target).innerHTML = html;
}

function appendHtml(target, html) {
  document.getElementById(target).innerHTML += html;
}

function addClass(target, style) {
  document.getElementById(target).classList.add(style);
}

function removeClass(target, style) {
  document.getElementById(target).classList.remove(style);
}

function thousandSeparator(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
