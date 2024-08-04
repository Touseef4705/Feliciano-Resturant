const mobile_nav = document.querySelector(".mobile-navbar");

// Initialize the sidebar as closed
mobile_nav.setAttribute("data-open", "false");

function openSidebar() {
  if (mobile_nav.getAttribute("data-open") === "false") {
    mobile_nav.style.display = "flex";
    mobile_nav.setAttribute("data-open", "true");
  } else {
    mobile_nav.style.display = "none";
    mobile_nav.setAttribute("data-open", "false");
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.count');
  const speed = 200; // The lower the slower

  counters.forEach(counter => {
      const updateCount = () => {
          const target = +counter.getAttribute('data-target');
          const count = +counter.innerText;

          const inc = target / speed;

          if (count < target) {
              counter.innerText = Math.ceil(count + inc);
              setTimeout(updateCount, 1);
          } else {
              counter.innerText = target;
          }
      };

      updateCount();
  });

  const sections = document.querySelectorAll('.services-section, .about-section, .stats-section, .testimonial-section, .blog-section, .footer-container, .dishes-container, .menu-section, .chef-section, .reservation-section');

  const options = {
      threshold: 0.1
  };

  const callback = (entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target); // Stop observing after it becomes visible
          }
      });
  };

  const observer = new IntersectionObserver(callback, options);

  sections.forEach(section => {
      observer.observe(section);
  });
});
