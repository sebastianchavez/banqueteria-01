/* ========================================
   CONTACT.JS - Validación y envío de formulario
   ======================================== */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  if (form) {
    initContactForm(form);
  }
});

function initContactForm(form) {
  const fields = {
    nombre: { el: form.querySelector('#nombre'), validate: validateRequired },
    email: { el: form.querySelector('#email'), validate: validateEmail },
    telefono: { el: form.querySelector('#telefono'), validate: validatePhone },
    tipoEvento: { el: form.querySelector('#tipoEvento'), validate: validateRequired },
    fecha: { el: form.querySelector('#fecha'), validate: validateDate },
    invitados: { el: form.querySelector('#invitados'), validate: validateRequired },
    mensaje: { el: form.querySelector('#mensaje'), validate: validateRequired }
  };

  // Validación en tiempo real
  Object.values(fields).forEach(field => {
    if (!field.el) return;
    field.el.addEventListener('blur', () => validateField(field));
    field.el.addEventListener('input', () => clearError(field));
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;
    Object.values(fields).forEach(field => {
      if (!field.el) return;
      if (!validateField(field)) isValid = false;
    });

    if (!isValid) {
      showNotification('Por favor, completa todos los campos correctamente', 'error');
      return;
    }

    // Simulación de envío
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i>Enviando...';
    submitBtn.disabled = true;

    setTimeout(() => {
      showNotification('¡Mensaje enviado con éxito! Te contactaremos pronto.', 'success');
      form.reset();
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }, 1500);
  });
}

function validateField(field) {
  const { el, validate } = field;
  const value = el.value.trim();
  const errorEl = el.parentElement.querySelector('.error-message');

  const result = validate(value, el);

  if (!result.valid) {
    el.classList.add('error');
    if (errorEl) {
      errorEl.textContent = result.message;
      errorEl.classList.add('show');
    }
    return false;
  } else {
    el.classList.remove('error');
    if (errorEl) errorEl.classList.remove('show');
    return true;
  }
}

function clearError(field) {
  const { el } = field;
  const errorEl = el.parentElement.querySelector('.error-message');
  el.classList.remove('error');
  if (errorEl) errorEl.classList.remove('show');
}

function validateRequired(value) {
  if (!value) return { valid: false, message: 'Este campo es obligatorio' };
  return { valid: true };
}

function validateEmail(value) {
  if (!value) return { valid: false, message: 'El email es obligatorio' };
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!re.test(value)) return { valid: false, message: 'Email inválido' };
  return { valid: true };
}

function validatePhone(value) {
  if (!value) return { valid: false, message: 'El teléfono es obligatorio' };
  const re = /^[\d\s\+\-\(\)]{8,}$/;
  if (!re.test(value)) return { valid: false, message: 'Teléfono inválido' };
  return { valid: true };
}

function validateDate(value) {
  if (!value) return { valid: false, message: 'Selecciona una fecha' };
  const selected = new Date(value);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  if (selected < today) return { valid: false, message: 'La fecha debe ser futura' };
  return { valid: true };
}

function showNotification(message, type = 'success') {
  const existing = document.querySelector('.notification');
  if (existing) existing.remove();

  const notification = document.createElement('div');
  notification.className = 'notification';
  notification.style.backgroundColor = type === 'success' ? '#10b981' : '#dc2626';

  const icon = type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle';
  notification.innerHTML = `<i class="fas ${icon} text-xl"></i><span>${message}</span>`;

  document.body.appendChild(notification);

  setTimeout(() => notification.classList.add('show'), 100);

  setTimeout(() => {
    notification.classList.remove('show');
    setTimeout(() => notification.remove(), 500);
  }, 4000);
}
