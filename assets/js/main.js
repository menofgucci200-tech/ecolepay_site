// Simple utilities for all pages
document.addEventListener("DOMContentLoaded", () => {
  setupMobileNav();
  setupScrollReveal();
  setupCounters();
  setupSchoolsFilters();
  setupContactForm();
  setupFaqAccordion();
  setupSchoolLogos();
  setupTypingAnimation();
  setupBenefitsTabs();
});

function setupMobileNav() {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  if (!header || !toggle) return;

  toggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("nav-open");
    toggle.classList.toggle("is-open", isOpen);
  });

  header.addEventListener("click", (event) => {
    if (!(event.target instanceof HTMLElement)) return;
    const link = event.target.closest("a");
    if (link && header.classList.contains("nav-open")) {
      header.classList.remove("nav-open");
      toggle.classList.remove("is-open");
    }
  });
}

function setupScrollReveal() {
  const sections = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || sections.length === 0) {
    sections.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  sections.forEach((el) => observer.observe(el));
}

function setupCounters() {
  const counters = document.querySelectorAll(".counter");
  if (counters.length === 0) return;

  const startAnimation = () => {
    counters.forEach((el) => animateCounter(el));
  };

  if (!("IntersectionObserver" in window)) {
    startAnimation();
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startAnimation();
          observer.disconnect();
        }
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(counters[0]);
}

function animateCounter(el) {
  const targetAttr = el.getAttribute("data-target");
  if (!targetAttr) return;

  const target = parseFloat(targetAttr);
  const hasDecimal = el.getAttribute("data-decimal");
  const duration = 1400;
  const startTime = performance.now();

  function update(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = target * eased;
    el.textContent = hasDecimal ? value.toFixed(1) : Math.round(value).toLocaleString("fr-FR");
    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

function setupSchoolsFilters() {
  const list = document.getElementById("schools-list");
  if (!list) return;

  const searchInput = document.getElementById("search-ecole");
  const citySelect = document.getElementById("filter-ville");
  const emptyMessage = document.getElementById("schools-empty");
  const cards = Array.from(list.querySelectorAll(".school-card"));

  function applyFilters() {
    const query = (searchInput?.value || "").toLowerCase().trim();
    const city = citySelect?.value || "all";
    let visibleCount = 0;

    // Quartiers d'Abidjan
    const abidjanQuartiers = ["cocody", "yopougon", "riviera", "2-plateaux", "bingerville", "angre", "abidjan"];

    cards.forEach((card) => {
      const name = (card.getAttribute("data-name") || "").toLowerCase();
      const ville = (card.getAttribute("data-ville") || "").toLowerCase();
      const matchQuery = !query || name.includes(query);
      
      let matchCity = false;
      if (city === "all") {
        matchCity = true;
      } else if (city === "abidjan") {
        // Inclure tous les quartiers d'Abidjan
        matchCity = abidjanQuartiers.includes(ville);
      } else {
        matchCity = ville === city;
      }
      
      const isVisible = matchQuery && matchCity;

      card.style.display = isVisible ? "" : "none";
      if (isVisible) visibleCount += 1;
    });

    if (emptyMessage) emptyMessage.classList.toggle("hidden", visibleCount > 0);
  }

  searchInput?.addEventListener("input", applyFilters);
  citySelect?.addEventListener("change", applyFilters);
}

function setupContactForm() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const feedback = document.getElementById("contact-feedback");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const fields = [
      { id: "contact-name", label: "Nom complet" },
      { id: "contact-email", label: "Adresse e-mail" },
      { id: "contact-subject", label: "Sujet" },
      { id: "contact-message", label: "Message" },
    ];

    let hasError = false;

    fields.forEach(({ id, label }) => {
      const input = document.getElementById(id);
      const errorNode = document.querySelector(`.field-error[data-for="${id}"]`);
      if (!input || !errorNode) return;

      const value = input.value.trim();
      let error = "";

      if (!value) {
        error = `${label} est obligatoire.`;
      } else if (id === "contact-email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        error = "Veuillez saisir une adresse e-mail valide.";
      }

      errorNode.textContent = error;
      if (error) hasError = true;
    });

    if (hasError) {
      feedback.textContent = "";
      return;
    }

    form.reset();
    if (feedback) {
      feedback.textContent =
        "Merci pour votre message. Cette démo ne transmet pas encore les données, mais notre équipe vous répondrait rapidement dans la version finale.";
    }
  });
}

function setupFaqAccordion() {
  const items = document.querySelectorAll(".faq-item");
  if (items.length === 0) return;

  items.forEach((item) => {
    const button = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    if (!button || !answer) return;

    button.addEventListener("click", () => {
      const isOpen = item.classList.contains("is-open");

      // Fermer les autres
      items.forEach((other) => {
        if (other !== item) {
          other.classList.remove("is-open");
        }
      });

      // Basculer l'élément courant
      item.classList.toggle("is-open", !isOpen);
    });
  });
}

function setupSchoolLogos() {
  const schoolLogos = document.querySelectorAll(".school-logo");
  if (schoolLogos.length === 0) return;

  schoolLogos.forEach((img) => {
    img.addEventListener("error", () => {
      // Remplacer l'image par une icône SVG d'école
      const parent = img.parentElement;
      if (!parent) return;

      const schoolName = parent.querySelector("h3")?.textContent || "École";
      
      // Créer l'icône SVG
      const iconSvg = `
        <svg class="school-icon-default" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="40" width="60" height="50" rx="4" fill="rgba(30, 64, 175, 0.1)" stroke="rgba(30, 64, 175, 0.3)" stroke-width="2"/>
          <rect x="30" y="50" width="12" height="12" rx="1" fill="rgba(30, 64, 175, 0.2)"/>
          <rect x="48" y="50" width="12" height="12" rx="1" fill="rgba(30, 64, 175, 0.2)"/>
          <rect x="66" y="50" width="12" height="12" rx="1" fill="rgba(30, 64, 175, 0.2)"/>
          <rect x="30" y="68" width="12" height="12" rx="1" fill="rgba(30, 64, 175, 0.2)"/>
          <rect x="48" y="68" width="12" height="12" rx="1" fill="rgba(30, 64, 175, 0.2)"/>
          <rect x="66" y="68" width="12" height="12" rx="1" fill="rgba(30, 64, 175, 0.2)"/>
          <polygon points="50,20 30,30 30,40 70,40 70,30" fill="rgba(30, 64, 175, 0.15)" stroke="rgba(30, 64, 175, 0.3)" stroke-width="2"/>
          <line x1="50" y1="20" x2="50" y2="40" stroke="rgba(30, 64, 175, 0.3)" stroke-width="2"/>
        </svg>
      `;
      
      // Remplacer l'image par l'icône
      img.style.display = "none";
      parent.insertAdjacentHTML("afterbegin", iconSvg);
    });
  });
}

function setupTypingAnimation() {
  const typingElement = document.getElementById("typing-text");
  if (!typingElement) return;

  const text = "EcolePay";
  let index = 0;
  let isDeleting = false;
  let currentText = "";

  function type() {
    if (index < text.length && !isDeleting) {
      currentText += text[index];
      index++;
      typingElement.textContent = currentText;
      setTimeout(type, 150);
    } else if (isDeleting && currentText.length > 0) {
      currentText = currentText.slice(0, -1);
      typingElement.textContent = currentText;
      setTimeout(type, 80);
    } else if (currentText.length === 0 && isDeleting) {
      isDeleting = false;
      index = 0;
      setTimeout(type, 500);
    } else if (index === text.length && !isDeleting) {
      setTimeout(() => {
        isDeleting = true;
        type();
      }, 2000);
    }
  }

  // Démarrer l'animation après un court délai
  setTimeout(type, 1000);
}

function setupBenefitsTabs() {
  const tabButtons = document.querySelectorAll(".tab-button");
  const tabPanels = document.querySelectorAll(".tab-panel");

  if (tabButtons.length === 0 || tabPanels.length === 0) return;

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetTab = button.getAttribute("data-tab");

      // Remove active class from all buttons and panels
      tabButtons.forEach((btn) => btn.classList.remove("active"));
      tabPanels.forEach((panel) => panel.classList.remove("active"));

      // Add active class to clicked button and corresponding panel
      button.classList.add("active");
      const targetPanel = document.getElementById(`tab-${targetTab}`);
      if (targetPanel) {
        targetPanel.classList.add("active");
      }
    });
  });
}


