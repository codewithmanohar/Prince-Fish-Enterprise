
  const track = document.querySelector('.slider-track');
  const dots = document.querySelectorAll('.dot');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  let currentIndex = 0;

  function showSlide(index) {
    track.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
    currentIndex = index;
  }

  prevBtn.addEventListener('click', () => {
    const index = (currentIndex - 1 + dots.length) % dots.length;
    showSlide(index);
  });

  nextBtn.addEventListener('click', () => {
    const index = (currentIndex + 1) % dots.length;
    showSlide(index);
  });

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      showSlide(parseInt(dot.getAttribute('data-index')));
    });
  });

  // Auto slide (optional)
  setInterval(() => {
    showSlide((currentIndex + 1) % dots.length);
  }, 5000);

