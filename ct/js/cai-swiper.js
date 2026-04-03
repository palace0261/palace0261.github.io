document.addEventListener('DOMContentLoaded', function () {
  if (typeof Swiper === 'undefined') return;

  const cai = document.querySelector('.cai');
  if (!cai) return;

  const ul = cai.querySelector('ul');
  if (!ul) return;

  // Create Swiper structure
  const container = document.createElement('div');
  container.className = 'swiper cai-swiper';

  const wrapper = document.createElement('div');
  wrapper.className = 'swiper-wrapper';
  container.appendChild(wrapper);

  // Move each li content into a swiper-slide
  Array.from(ul.children).forEach(function(li){
    const slide = document.createElement('div');
    slide.className = 'swiper-slide';
    // move img or innerHTML
    slide.innerHTML = li.innerHTML;
    wrapper.appendChild(slide);
  });

  // Add optional scrollbar/pagination if desired
  const scrollbar = document.createElement('div');
  scrollbar.className = 'swiper-scrollbar';
  container.appendChild(scrollbar);

  // Insert the Swiper after the original ul and hide original ul
  ul.style.display = 'none';
  ul.parentNode.insertBefore(container, ul.nextSibling);

  // Initialize Swiper for horizontal drag-scroll with freeMode
  const swiper = new Swiper(container, {
    slidesPerView: 'auto',
    spaceBetween: 10,
    freeMode: true,
    grabCursor: true,
    scrollbar: {
      // el: scrollbar,
      draggable: true,
    },
    mousewheel: false,
    simulateTouch: true,
  });

  // toggle grabbing class for cursor feedback
  const sWrapper = container.querySelector('.swiper-wrapper');
  sWrapper.addEventListener('pointerdown', function(){ sWrapper.classList.add('is-grabbing'); });
  window.addEventListener('pointerup', function(){ sWrapper.classList.remove('is-grabbing'); });
});
