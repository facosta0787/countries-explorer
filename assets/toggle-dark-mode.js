const darkModeButton = document.querySelector('.button-dark');

darkModeButton.addEventListener('click', function() {
 if (document.body.classList.contains('is-dark-mode')) {
  localStorage.setItem('theme', 'is-light-mode')
 }
 if (document.body.classList.contains('is-light-mode')) {
  localStorage.setItem('theme', 'is-dark-mode')
 }

 document.body.classList.toggle('is-dark-mode')
 document.body.classList.toggle('is-light-mode')
})

const theme = localStorage.getItem('theme') || 'is-light-mode'
document.body.classList.add(theme)