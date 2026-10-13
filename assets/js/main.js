/* ========================================
   MAIN.JS - Funcionalidades Globales
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
  renderCommonElements();
  initNavbar();
  initMobileMenu();
  initScrollReveal();
  initScrollTop();
  initCounters();
});

// ========================================
// NAVBAR
// ========================================
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 80) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// ========================================
// MENÚ MÓVIL
// ========================================
function initMobileMenu() {
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const closeBtn = document.querySelector('.mobile-menu-close');
  const mobileLinks = document.querySelectorAll('.mobile-menu a');

  if (!hamburger || !mobileMenu) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  }

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// ========================================
// SCROLL REVEAL (Intersection Observer)
// ========================================
let revealObserver = null;

function getRevealObserver() {
  if (revealObserver) return revealObserver;

  if (!('IntersectionObserver' in window)) return null;

  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        revealObserver.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  return revealObserver;
}

function initScrollReveal() {
  observeRevealElements();
}

// Observa cualquier elemento .reveal* nuevo (útil tras renders dinámicos)
function observeRevealElements(root = document) {
  const elements = root.querySelectorAll('.reveal:not(.active), .reveal-left:not(.active), .reveal-right:not(.active), .reveal-scale:not(.active)');

  if (elements.length === 0) return;

  const observer = getRevealObserver();

  if (!observer) {
    // Fallback: sin soporte de IntersectionObserver, mostrar todo
    elements.forEach(el => el.classList.add('active'));
    return;
  }

  elements.forEach(el => observer.observe(el));
}

// ========================================
// SCROLL TO TOP
// ========================================
function initScrollTop() {
  const btn = document.querySelector('.scroll-top');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      btn.classList.add('show');
    } else {
      btn.classList.remove('show');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ========================================
// CONTADORES ANIMADOS
// ========================================
function initCounters() {
  const counters = document.querySelectorAll('.counter');
  if (counters.length === 0) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(c => observer.observe(c));
}

function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const suffix = el.dataset.suffix || '';
  const duration = 2000;
  const start = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(eased * target);

    el.textContent = current.toLocaleString('es-CL') + suffix;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.textContent = target.toLocaleString('es-CL') + suffix;
    }
  }

  requestAnimationFrame(update);
}

// ========================================
// RENDER ELEMENTOS COMUNES (Navbar, Footer, WhatsApp)
// ========================================
function renderCommonElements() {
  renderNavbar();
  renderFooter();
  renderFloatingButtons();
  setActiveNavLink();
}

function renderNavbar() {
  const navbarContainer = document.getElementById('navbar-container');
  if (!navbarContainer) return;

  const currentPath = window.location.pathname;
  const isHome = currentPath.endsWith('index.html') || currentPath.endsWith('/') || currentPath === '' || currentPath.endsWith('banqueteria-01\\') || currentPath.endsWith('banqueteria-01/');

  const basePath = isHome ? '' : '../';
  const pagesPath = isHome ? 'pages/' : '';

  navbarContainer.innerHTML = `
    <nav class="navbar fixed top-0 left-0 w-full z-50 py-4 text-white">
      <div class="container mx-auto px-6 lg:px-12 flex items-center justify-between">
        <a href="${basePath}index.html" class="flex items-center gap-3 group">
          <div class="w-10 h-10 rounded-full gold-gradient flex items-center justify-center">
            <i class="fas fa-utensils text-dark text-sm"></i>
          </div>
          <div>
            <h1 class="font-serif text-xl font-bold leading-none">Sabores de Autor</h1>
            <p class="text-xs text-gold-light tracking-widest uppercase">Banquetería Premium</p>
          </div>
        </a>

        <ul class="hidden lg:flex items-center gap-8 text-sm tracking-wider uppercase">
          <li><a href="${basePath}index.html" class="nav-link" data-page="inicio">Inicio</a></li>
          <li><a href="${pagesPath}nosotros.html" class="nav-link" data-page="nosotros">Nosotros</a></li>
          <li><a href="${pagesPath}servicios.html" class="nav-link" data-page="servicios">Servicios</a></li>
          <li><a href="${pagesPath}galeria.html" class="nav-link" data-page="galeria">Galería</a></li>
          <li><a href="${pagesPath}precios.html" class="nav-link" data-page="precios">Precios</a></li>
          <li><a href="${pagesPath}contacto.html" class="nav-link" data-page="contacto">Contacto</a></li>
        </ul>

        <a href="${pagesPath}contacto.html" class="hidden lg:inline-block btn-primary">
          <span><i class="fas fa-calendar-alt mr-2"></i>Reservar</span>
        </a>

        <button class="hamburger lg:hidden z-50" aria-label="Menú">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>

    <!-- Mobile menu -->
    <div class="mobile-menu fixed inset-0 bg-dark z-40 flex flex-col items-center justify-center lg:hidden">
      <ul class="text-center space-y-6">
        <li><a href="${basePath}index.html" class="font-serif text-3xl text-white hover:text-gold transition">Inicio</a></li>
        <li><a href="${pagesPath}nosotros.html" class="font-serif text-3xl text-white hover:text-gold transition">Nosotros</a></li>
        <li><a href="${pagesPath}servicios.html" class="font-serif text-3xl text-white hover:text-gold transition">Servicios</a></li>
        <li><a href="${pagesPath}galeria.html" class="font-serif text-3xl text-white hover:text-gold transition">Galería</a></li>
        <li><a href="${pagesPath}precios.html" class="font-serif text-3xl text-white hover:text-gold transition">Precios</a></li>
        <li><a href="${pagesPath}contacto.html" class="font-serif text-3xl text-white hover:text-gold transition">Contacto</a></li>
      </ul>
    </div>
  `;
}

function renderFooter() {
  const footerContainer = document.getElementById('footer-container');
  if (!footerContainer) return;

  const currentPath = window.location.pathname;
  const isHome = currentPath.endsWith('index.html') || currentPath.endsWith('/') || currentPath === '' || currentPath.endsWith('banqueteria-01\\') || currentPath.endsWith('banqueteria-01/');

  const basePath = isHome ? '' : '../';
  const pagesPath = isHome ? 'pages/' : '';
  const assetsPath = isHome ? 'assets/' : '../assets/';

  footerContainer.innerHTML = `
    <footer class="bg-dark text-white pt-20 pb-8">
      <div class="container mx-auto px-6 lg:px-12">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <!-- Logo y descripción -->
          <div>
            <div class="flex items-center gap-3 mb-6">
              <div class="w-12 h-12 rounded-full gold-gradient flex items-center justify-center">
                <i class="fas fa-utensils text-dark"></i>
              </div>
              <div>
                <h3 class="font-serif text-xl font-bold">Sabores de Autor</h3>
                <p class="text-xs text-gold-light tracking-widest uppercase">Banquetería Premium</p>
              </div>
            </div>
            <p class="text-gray-300 leading-relaxed mb-6">
              Más de 15 años creando experiencias gastronómicas inolvidables. Cada evento es una obra de arte diseñada especialmente para ti.
            </p>
            <div class="flex gap-3">
              <a href="${BANQUETERIA_DATA.business.social.instagram}" class="w-10 h-10 rounded-full bg-white/10 hover:bg-gold flex items-center justify-center transition">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="${BANQUETERIA_DATA.business.social.facebook}" class="w-10 h-10 rounded-full bg-white/10 hover:bg-gold flex items-center justify-center transition">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="${BANQUETERIA_DATA.business.social.whatsapp}" class="w-10 h-10 rounded-full bg-white/10 hover:bg-gold flex items-center justify-center transition">
                <i class="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          <!-- Links -->
          <div>
            <h4 class="font-serif text-lg mb-6 text-gold-light">Navegación</h4>
            <ul class="space-y-3">
              <li><a href="${basePath}index.html" class="text-gray-300 hover:text-gold transition">Inicio</a></li>
              <li><a href="${pagesPath}nosotros.html" class="text-gray-300 hover:text-gold transition">Sobre Nosotros</a></li>
              <li><a href="${pagesPath}servicios.html" class="text-gray-300 hover:text-gold transition">Servicios</a></li>
              <li><a href="${pagesPath}galeria.html" class="text-gray-300 hover:text-gold transition">Galería</a></li>
              <li><a href="${pagesPath}precios.html" class="text-gray-300 hover:text-gold transition">Precios</a></li>
              <li><a href="${pagesPath}contacto.html" class="text-gray-300 hover:text-gold transition">Contacto</a></li>
            </ul>
          </div>

          <!-- Servicios -->
          <div>
            <h4 class="font-serif text-lg mb-6 text-gold-light">Servicios</h4>
            <ul class="space-y-3">
              <li><a href="${pagesPath}servicios.html#bodas" class="text-gray-300 hover:text-gold transition">Bodas</a></li>
              <li><a href="${pagesPath}servicios.html#corporativos" class="text-gray-300 hover:text-gold transition">Eventos Corporativos</a></li>
              <li><a href="${pagesPath}servicios.html#cocktails" class="text-gray-300 hover:text-gold transition">Cocktails</a></li>
              <li><a href="${pagesPath}servicios.html#dulces" class="text-gray-300 hover:text-gold transition">Mesas de Dulces</a></li>
              <li><a href="${pagesPath}precios.html" class="text-gray-300 hover:text-gold transition">Planes y Precios</a></li>
            </ul>
          </div>

          <!-- Contacto -->
          <div>
            <h4 class="font-serif text-lg mb-6 text-gold-light">Contacto</h4>
            <ul class="space-y-4 text-gray-300">
              <li class="flex items-start gap-3">
                <i class="fas fa-map-marker-alt text-gold mt-1"></i>
                <span>${BANQUETERIA_DATA.business.address}</span>
              </li>
              <li class="flex items-start gap-3">
                <i class="fas fa-phone text-gold mt-1"></i>
                <span>${BANQUETERIA_DATA.business.phone}</span>
              </li>
              <li class="flex items-start gap-3">
                <i class="fas fa-envelope text-gold mt-1"></i>
                <span>${BANQUETERIA_DATA.business.email}</span>
              </li>
              <li class="flex items-start gap-3">
                <i class="fas fa-clock text-gold mt-1"></i>
                <div>
                  <p>Lun-Vie: 09:00 - 19:00</p>
                  <p class="text-sm text-gray-400">Sáb: 10:00 - 14:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p class="text-gray-400 text-sm text-center md:text-left">
            © 2025 Sabores de Autor. Todos los derechos reservados.
          </p>
          <div class="flex gap-6 text-sm">
            <a href="${pagesPath}privacidad.html" class="text-gray-400 hover:text-gold transition">Políticas de Privacidad</a>
            <a href="${pagesPath}terminos.html" class="text-gray-400 hover:text-gold transition">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

function renderFloatingButtons() {
  const whatsappHTML = `
    <a href="${BANQUETERIA_DATA.business.social.whatsapp}" target="_blank" rel="noopener" class="whatsapp-float" aria-label="WhatsApp">
      <i class="fab fa-whatsapp"></i>
    </a>
  `;

  const scrollTopHTML = `
    <button class="scroll-top" aria-label="Volver arriba">
      <i class="fas fa-chevron-up"></i>
    </button>
  `;

  const lightboxHTML = `
    <div class="lightbox" id="lightbox">
      <div class="lightbox-close" id="lightbox-close">
        <i class="fas fa-times"></i>
      </div>
      <img id="lightbox-img" src="" alt="Imagen ampliada">
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', whatsappHTML + scrollTopHTML + lightboxHTML);

  // Lightbox handlers
  setTimeout(() => {
    const lightbox = document.getElementById('lightbox');
    const lightboxClose = document.getElementById('lightbox-close');
    const lightboxImg = document.getElementById('lightbox-img');

    if (lightboxClose) {
      lightboxClose.addEventListener('click', () => {
        lightbox.classList.remove('active');
      });
    }

    if (lightbox) {
      lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
          lightbox.classList.remove('active');
        }
      });
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox) {
        lightbox.classList.remove('active');
      }
    });

    window.openLightbox = (src) => {
      if (lightbox && lightboxImg) {
        lightboxImg.src = src;
        lightbox.classList.add('active');
      }
    };
  }, 100);
}

function setActiveNavLink() {
  const path = window.location.pathname.toLowerCase();
  let currentPage = 'inicio';

  if (path.includes('nosotros')) currentPage = 'nosotros';
  else if (path.includes('servicios')) currentPage = 'servicios';
  else if (path.includes('galeria')) currentPage = 'galeria';
  else if (path.includes('precios')) currentPage = 'precios';
  else if (path.includes('contacto')) currentPage = 'contacto';

  const links = document.querySelectorAll('[data-page]');
  links.forEach(link => {
    if (link.dataset.page === currentPage) {
      link.classList.add('active');
    }
  });
}

// Exponer helpers globales para renders dinámicos en páginas específicas
window.observeRevealElements = observeRevealElements;
