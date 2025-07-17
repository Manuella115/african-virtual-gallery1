const toggleButton = document.getElementById('menu-toggle');
const dropdownMenu = document.getElementById('dropdown-menu');

toggleButton.addEventListener('click', () => {
  dropdownMenu.classList.toggle('show');
});
o