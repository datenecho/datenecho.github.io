const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

document.querySelectorAll('.masonry-item img').forEach(img => {
  img.onload = () => {
    if (img.naturalHeight > img.naturalWidth) {
      img.parentElement.classList.add('portrait');
    } else {
      img.parentElement.classList.add('landscape');
    }
  };
});

