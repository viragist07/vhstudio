document.querySelector('.menu-icon').addEventListener('click', function() {
  var header = document.querySelector('.header');
  var menuItems = document.querySelector('.menu-items');
  header.classList.toggle('collapsed');
  menuItems.classList.toggle('collapsed');
});


