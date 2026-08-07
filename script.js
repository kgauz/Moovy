document.addEventListener("DOMContentLoaded", () => {

   const counters = document.querySelectorAll('.counter');
   const dropdowns = document.querySelectorAll(".dropdown-toggle");
   const locationDropDown = document.querySelector(".location")
   const locationMenu = document.querySelector(".locationsDropDown");
   const serviceDropMenu = document.querySelector(".service");
   const serviceMenu = document.querySelector(".servicesDropDown");
  const overlay = document.querySelector(".overlay");
  const open_form = document.querySelectorAll("#openForm");
  const closeM = document.querySelector("#closeModal");
  const movers = document.querySelectorAll(".moves");
  const residentialBtn = document.getElementById("residentialBtn");
  const commercial = document.querySelector(".commercialDistance");
  const house = document.querySelector(".houseApartment");
  let switched = false;

residentialBtn.addEventListener("click", function(e){
    e.preventDefault();
     e.stopPropagation();
    
    if(!switched)
    {
      commercial.classList.add("hideit");
      commercial.classList.remove("showit");
      
      house.classList.add("showit");
      house.classList.remove("hideit");
      switched = true;

    }
    else{
        commercial.classList.add("showit");
        commercial.classList.remove("hideit");

        house.classList.add("hideit");
        house.classList.remove("showit");
        switched =false;
    }
    
    
    

});

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

  movers.forEach(mov =>{
    mov.addEventListener('click', () =>{
      const page = mov.dataset.page; 
    
      if(page === "apartmentMovers"){
      window.location.href = "apartmentMovers.html";
    }
    else if(page === "commercialMovers"){
      window.location.href = "commercialMove.html";
    }
    else if(page === "longDistance"){
      window.location.href = "longDistance.html";
    }
    else if(page === "residentialMovers"){
       window.location.href = "residentialMove.html";
    }
    })
  });




  document.querySelectorAll('.faq-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;

      item.classList.toggle('active');

      const icon = header.querySelector('.icon');
      icon.textContent = item.classList.contains('active') ? '−' : '+';
    });
  });

 

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

  open_form.forEach(menu =>{
    menu.addEventListener("click", ()=>{
       overlay.classList.toggle("active");
       document.body.style.overflow = "hidden"; 
    });
  });

  closeM.addEventListener("click", ()=>{
        overlay.classList.remove("active");
    document.body.style.overflow = "auto"; 
  });

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
         overlay.classList.remove("active");
         document.body.style.overflow = "auto";
    }
  });

});

document.addEventListener("DOMContentLoaded", () => {

    const loads = document.querySelectorAll(".load");
    const buttonLoad = document.querySelector("#loadButton");
    const removeB = document.querySelector(".removeButton");
    const childrenMov = document.querySelectorAll(".children");
    const steps = document.querySelectorAll(".showStep");
    const cards = document.querySelectorAll(".contactUs");

    
    let isScrolling = false;
    let currentIndex =0;
    let lastScroll = 0;
    updateUI(currentIndex);



        if (buttonLoad) {
            buttonLoad.addEventListener("click", () => {
              loads.forEach(load => load.style.display = "grid");

              buttonLoad.style.display = "none";
              if (removeB) removeB.style.display = "none";
            });
          }

    childrenMov.forEach(child =>{
      child.addEventListener("click", () =>{
        const page = child.dataset.mov;

        if(page === "Moving with children")
        {
          window.location.href = "movingWithChildren.html";
        }
        else if(page === "townhouse vs duplex")
        {
          window.location.href = "townhouse.html";
        }
        else if(page === "diy vs professional movers")
        {
          window.location.href = "professionalMovers.html";
        }
        else if(page === "how to pack")
        {
          window.location.href = "howToPack.html";
        }
      });
    });

    document.addEventListener("scroll", () => {

   if (isScrolling) return;

    const currentScroll = window.scrollY;

    if (currentScroll > lastScroll) {
        // DOWN
        if (currentIndex < steps.length - 1) {
            currentIndex++;
            updateUI(currentIndex);
        }
    } else {
        // UP
        if (currentIndex > 0) {
            currentIndex--;
            updateUI(currentIndex);
        }
    }

    lastScroll = currentScroll;

    isScrolling = true;

    setTimeout(() => {
        isScrolling = false;
    }, 400);
});

function updateUI(index) {

    // Steps
    steps.forEach((step, i) => {
        step.classList.remove("activeStep");

        if (i <= index) {
            step.classList.add("activeStep");
        }
    });

    // Cards
    cards.forEach((card, i) => {
        card.classList.remove("activeCard");

        if (i <= index) {
            card.classList.add("activeCard");
        }
    });

}

let lastScrolling = 0;
let scrolls = false;
 const stickyButton = document.querySelector(".stickButton");
  const chooseM = document.querySelector(".choose");
    const vector = document.querySelector(".vectorImg");

document.addEventListener("scroll", ()=>{

   if (!stickyButton) {
        console.error("stickyButton not found on this page");
        return;
    }

    window.addEventListener("scroll", () => {

        const currentScrolling = window.scrollY;

        if (currentScrolling === 0) {
            stickyButton.classList.remove("showButton");
        } else {
            stickyButton.classList.add("showButton");
        }
    });


});


    let lastScrollY = window.scrollY;
    let currentY = 0;
     const minY = 0;      // top limit
    const maxY = 570; 
window.addEventListener("scroll", () => {
         const scrollY = window.scrollY;

        // how fast you're scrolling
        const speed = scrollY - lastScrollY;

        // accumulate movement
        currentY += speed * 1.0; // adjust sensitivity here
          if (currentY < minY) currentY = minY;
        if (currentY > maxY) currentY = maxY;
        // apply movement

        if (!vector) {
             console.log("vectorImg not found on this page");
        } else {
          vector.style.transform = `translateY(${currentY}px)`;
        }


        lastScrollY = scrollY;
});




    


});

































// fetch("header.html")
//   .then(res => res.text())
//   .then(data => {
//     document.getElementById("header").innerHTML = data;
//   });

// fetch("footer.html")
//   .then(res => res.text())
//   .then(data => {
//     document.getElementById("footer").innerHTML = data;
//   });