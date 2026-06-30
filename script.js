/* Smooth Scroll for Navigation */
const links = document.querySelectorAll("nav a");

links.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    window.scrollTo({
      top: targetSection.offsetTop - 70,
      behavior: "smooth"
    });
  });
});

/* Active Nav Link on Scroll */
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  links.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

/* Scroll Animation (Fade-in effect) */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".section, .card");
hiddenElements.forEach(el => observer.observe(el));

/* Contact Form UX */
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const inputs = form.querySelectorAll("input, textarea");
  let isValid = true;

  inputs.forEach(input => {
    if (input.value.trim() === "") {
      isValid = false;
      input.style.border = "2px solid red";
    } else {
      input.style.border = "none";
    }
  });

  if (isValid) {
    alert("Message sent successfully 🚀");
    form.reset();
  } else {
    alert("Please fill all fields ⚠️");
  }
});
