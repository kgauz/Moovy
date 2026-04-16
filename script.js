document.addEventListener("DOMContentLoaded", () => {

  const counters = document.querySelectorAll('.counter');

  const startCounting = (counter) => {
    const target = +counter.getAttribute('data-target');
    let count = 0;

    const update = () => {
      const increment = target / 100;

      if (count < target) {
        count += increment;
        counter.innerText = Math.ceil(count);
        requestAnimationFrame(update);
      } else {
        counter.innerText = target + "+";
      }
    };

    update();
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startCounting(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.6 });

  counters.forEach(counter => observer.observe(counter));

  const container = document.querySelector('.residential-images');
  const moovy = document.querySelector('.moovy-images');

 window.scrollCardsLeft = function () {
  if (container) {
    container.scrollBy({ left: -400, behavior: 'smooth' });
  }
};

window.scrollRight = function () {
  if (container) {
    container.scrollBy({ left: 400, behavior: 'smooth' });
  }
};

window.scrollLeft2 = function () {
  if (moovy) {
    moovy.scrollBy({ left: -400, behavior: 'smooth' });
  }
};

window.scrollRight2 = function () {
  if (moovy) {
    moovy.scrollBy({ left: 400, behavior: 'smooth' });
  }
};



  document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
      const parent = header.parentElement;

      parent.classList.toggle('active');

      const icon = header.querySelector('.icon');
      icon.textContent = parent.classList.contains('active') ? '−' : '+';
    });
  });


  document.querySelectorAll('.faq-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;

      item.classList.toggle('active');

      const icon = header.querySelector('.icon');
      icon.textContent = item.classList.contains('active') ? '−' : '+';
    });
  });

});