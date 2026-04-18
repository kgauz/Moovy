document.addEventListener("DOMContentLoaded", () => {

   const counters = document.querySelectorAll('.counter');
   const dropdowns = document.querySelectorAll(".dropdown-toggle");
   const locationDropDown = document.querySelector(".location")
   const locationMenu = document.querySelector(".locationsDropDown");
   const serviceDropMenu = document.querySelector(".service");
   const serviceMenu = document.querySelector(".servicesDropDown");

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

  // dropdowns.forEach(dropdown => {
  //   dropdown.addEventListener("click", function() {
  //     const icon = this.querySelector(".fa-chevron-down");
  //     if(!icon)
  //     {
  //        icon.classList.remove("rotate");
  //     }
  //     else{
  //        icon.classList.toggle("rotate");
  //     }

  //   });
  // });

  locationDropDown.addEventListener("click", ()=>{
     if(locationMenu.style.display === "block")
     {
        locationMenu.style.display = "none";
     }
     else
     {
        locationMenu.style.display = "block";
     }
     
  
  });

   serviceDropMenu.addEventListener("click", ()=>{
     if(serviceMenu.style.display === "block")
     {
        serviceMenu.style.display = "none";
     }
     else
     {
        serviceMenu.style.display = "block";
     }
   
     
  
  });

document.addEventListener("click", (e) => {
  if (!locationDropDown.contains(e.target)) {
    locationMenu.classList.remove("show");
      locationMenu.style.display = "none";
  }
});

document.addEventListener("click", (e) => {
  if (!serviceDropMenu.contains(e.target)) {
      serviceMenu.style.display = "none";
  }
});


});