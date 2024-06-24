document.addEventListener('DOMContentLoaded', function() {
    const carouselItems = document.querySelectorAll('.carousel-item');
    const totalItems = carouselItems.length;
    let currentItem = 0;
  
    function showItem(index) {
      carouselItems.forEach(item => {
        item.classList.remove('active');
      });
      carouselItems[index].classList.add('active');
    }
  
    function nextItem() {
      currentItem = (currentItem + 1) % totalItems;
      showItem(currentItem);
    }
  
    function prevItem() {
      currentItem = (currentItem - 1 + totalItems) % totalItems;
      showItem(currentItem);
    }
  
    const prevButton = document.querySelector('.carousel-control.prev');
    const nextButton = document.querySelector('.carousel-control.next');
  
    prevButton.addEventListener('click', prevItem);
    nextButton.addEventListener('click', nextItem);
  
    showItem(currentItem);
  });
  