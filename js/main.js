document.getElementById('menu-toggle').addEventListener('click', function () {
  var menu = document.getElementById('menu');
  if(!menu){
    window.alert('nomenu');
    return;
  }
  // if menu has class
  if (menu.classList.contains('open')) {
    // remove class
    menu.classList.remove('open');
  } else {
    // add class to open menu
    menu.classList.add('open');
  }
});
