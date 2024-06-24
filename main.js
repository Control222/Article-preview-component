const button = document.getElementById('share-icon');
const shareLinks = document.querySelector('.share-links');

button.addEventListener('click', () => {
  shareLinks.parentElement.classList.toggle('active');
});
