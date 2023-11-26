var dropdowns = document.querySelectorAll('.carta1');
dropdowns.forEach(function(dropdown) {
  dropdown.addEventListener('click', function(event) {
    event.stopPropagation();
    dropdown.classList.toggle('active');
  });
});