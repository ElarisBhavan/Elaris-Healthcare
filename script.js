// Header hide-on-scroll functionality
const header = document.getElementById('main-header');
let prevScrollPos = window.pageYOffset;

// ✅ Make sure header is visible on load
header.style.top = '0';

window.addEventListener('scroll', () => {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos || currentScrollPos <= 0) {
    // Scrolling up or top of page — show header
    header.style.top = '0';
  } else {
    // Scrolling down — hide header
    header.style.top = '-100px';
  }

  prevScrollPos = currentScrollPos;
});


document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });

  // Optional: close menu after clicking a link
  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('show');
    });
  });
});



// Placeholder log
console.log('Elaris Healthcare website script loaded.');

// Leadership and Compliance
  const tabs = document.querySelectorAll('.tab-btn');
  const slides = document.querySelectorAll('.topic-slide');
  let currentIndex = 0;
  let autoSwitchTimer;

  function showSlide(index) {
    tabs.forEach(btn => btn.classList.remove('is-current'));
    slides.forEach(slide => slide.classList.remove('is-active'));

    tabs[index].classList.add('is-current');
    slides[index].classList.add('is-active');
    currentIndex = index;
  }

  function autoSwitch() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function startAutoSwitch() {
    stopAutoSwitch(); // clear existing timer if any
    autoSwitchTimer = setInterval(autoSwitch, 8000); // 8 seconds
  }

  function stopAutoSwitch() {
    clearInterval(autoSwitchTimer);
  }

  // Setup initial auto switch
  startAutoSwitch();

  // Tab click handlers
  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      showSlide(index);
      startAutoSwitch(); // restart timer when user manually switches
    });
  });


//services
// Reveal each service card on scroll
// Intersection Observer for scroll reveal
const cards = document.querySelectorAll('.service-card');
const io = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      obs.unobserve(entry.target);
    }
  });
}, { rootMargin: '0px 0px -10% 0px' });

cards.forEach(card => {
  io.observe(card);
  card.setAttribute('tabindex', '0');
});

  document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', () => {
      card.classList.toggle('flipped');
    });
  });



// Reveal closing statement
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('is-visible');
      obs.unobserve(e.target);
    }
  });
}, { rootMargin: "0px 0px -10% 0px" });

document.querySelectorAll('.reveal-up').forEach(el => observer.observe(el));

//Why Choose Us
window.addEventListener("DOMContentLoaded", () => {
  const revealItems = document.querySelectorAll('.reveal-up');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px -10% 0px" });

  revealItems.forEach(item => observer.observe(item));
});

//***-----------------Who We Help------------ */

document.addEventListener("DOMContentLoaded", () => {
  const helpItems = document.querySelectorAll(".help-item");
const tooltipBox = document.getElementById("tooltipBox");

let currentItem = null;

helpItems.forEach(item => {
  item.addEventListener("click", (e) => {
    e.stopPropagation(); // prevent from closing immediately
    const desc = item.getAttribute("data-tooltip");

    // Toggle if same item clicked again
    if (currentItem === item) {
      tooltipBox.style.display = "none";
      currentItem = null;
      return;
    }

    currentItem = item;
    tooltipBox.innerText = desc;
    tooltipBox.style.display = "block";

    // Get position and center above
    const rect = item.getBoundingClientRect();
    const boxWidth = tooltipBox.offsetWidth;
    const boxHeight = tooltipBox.offsetHeight;

    const left = rect.left + rect.width / 2 - boxWidth / 2;
    const top = rect.top + window.scrollY - boxHeight - 12;

    tooltipBox.style.left = `${left}px`;
    tooltipBox.style.top = `${top}px`;
  });
});

// Hide tooltip on outside click
document.addEventListener("click", () => {
  tooltipBox.style.display = "none";
  currentItem = null;
});

// Hide tooltip on scroll
window.addEventListener("scroll", () => {
  tooltipBox.style.display = "none";
  currentItem = null;
});
});

///*********Contact Us */

  // Open Modal
 // Get elements
// Modal elements
const modal = document.getElementById('contactModal');
const openModalBtn = document.querySelector('.payer-btn');
const closeModalBtn = document.getElementById('closeModal');
const contactForm = document.getElementById('contactForm');

// Open modal
openModalBtn.addEventListener('click', (e) => {
  e.preventDefault();
  modal.classList.add('show');
});

// Close modal
closeModalBtn.addEventListener('click', () => {
  modal.classList.remove('show');
});

// Close when clicking outside the dialog
window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.remove('show');
  }
});

// Handle form submit
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you! We will get back to you shortly.');
  modal.classList.remove('show');
  contactForm.reset();
});


// Contact nav link behavior
document.querySelector('.contact-nav').addEventListener('click', function(e) {
  e.preventDefault();
  
  // Smooth scroll to payer-expertise section
  const target = document.getElementById('payer-expertise');
  target.scrollIntoView({ behavior: 'smooth' });
  
  // After scrolling, open modal
  setTimeout(() => {
    modal.classList.add('show');
  }, 800); // delay to match scroll speed
});


