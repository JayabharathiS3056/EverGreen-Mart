// Navbar Scroll Effect
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 50);
});

// Mobile Menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// Scroll Reveal
const reveals = document.querySelectorAll(".reveal");

function revealSections() {
  reveals.forEach(reveal => {
    const windowHeight = window.innerHeight;
    const revealTop = reveal.getBoundingClientRect().top;

    if (revealTop < windowHeight - 100) {
      reveal.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealSections);
revealSections();

// Active Navbar Link
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 200;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });
});

// Animated Counters
const counters = document.querySelectorAll(".counter");

const startCounter = () => {
  counters.forEach(counter => {
    const target = +counter.dataset.target;
    let count = 0;

    const updateCounter = () => {
      const increment = target / 80;

      if (count < target) {
        count += increment;
        counter.innerText = Math.ceil(count);
        setTimeout(updateCounter, 30);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });
};

let counterStarted = false;

window.addEventListener("scroll", () => {
  const hero = document.querySelector(".hero");

  if (!counterStarted && window.scrollY < hero.offsetHeight) {
    startCounter();
    counterStarted = true;
  }
});

// Scroll Progress Bar
const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const progress = (scrollTop / scrollHeight) * 100;

  progressBar.style.width = `${progress}%`;
});

// Smooth Floating Effect
document.querySelectorAll(".product-card").forEach(card => {
  card.addEventListener("mousemove", e => {
    const x = e.offsetX;
    const y = e.offsetY;

    card.style.transform = `rotateY(${(x - 150) / 25}deg) rotateX(${(y - 150) / -25}deg)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateY(0deg) rotateX(0deg)";
  });
});