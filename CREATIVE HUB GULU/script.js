/**
 * Creative Hub Gulu - Main Script v3.0
 * Features: Courses, Login Modal, Form Validation, Filters
 */

const CONFIG = {
  whatsappNumber: '256772123456', // CHANGE THIS
  formspreeId: 'YOUR_ID', // CHANGE THIS - from formspree.io
  programFee: 'UGX 200,000=',
  programDuration: '10 Months',
  youtubeChannel: 'https://youtube.com/@yourchannel', // CHANGE THIS
  disqusShortname: 'your-disqus-shortname' // CHANGE THIS after Disqus signup
};

const COURSES = [
  { id: 1, title: "Script Writing", type: "Pre-Production", desc: "Story structure, character development, dialogue, and formatting for short films & documentaries.", duration: "Month 1-2" },
  { id: 2, title: "Film Directing", type: "Pre-Production", desc: "Visual storytelling, working with actors, shot lists, and managing a set.", duration: "Month 3-4" },
  { id: 3, title: "Cinematography", type: "Production", desc: "Camera operation, lighting techniques, composition, and movement for emotion.", duration: "Month 5-6" },
  { id: 4, title: "Sound Recording & Mixing", type: "Production", desc: "Location sound, boom operation, wild tracks, and mixing in post-production.", duration: "Month 7-8" },
  { id: 5, title: "Film Editing", type: "Post-Production", desc: "Premiere Pro & DaVinci Resolve. Cutting for story, pace, color, and final delivery.", duration: "Month 9-10" }
];

const DOM = {
  coursesGrid: document.getElementById('coursesGrid'),
  filterButtons: document.querySelectorAll('.filter-btn'),
  registerForm: document.getElementById('registerForm'),
  formMessage: document.getElementById('formMessage'),
  loginBtn: document.getElementById('loginBtn'),
  loginModal: document.getElementById('loginModal'),
  closeModal: document.querySelector('.close'),
  auth0Login: document.getElementById('auth0Login')
};

// ===================================
// COURSE DISPLAY FUNCTIONS
// ===================================

function createCourseCard(course) {
  return `
    <div class="card" data-type="${course.type}" data-id="${course.id}">
      <h3>${course.title}</h3>
      <span class="tag">${course.type}</span>
      <p>${course.desc}</p>
      <p class="duration"><strong>Timeline:</strong> ${course.duration}</p>
    </div>
  `;
}

function displayCourses(coursesList) {
  if (!DOM.coursesGrid) return;
  
  if (coursesList.length === 0) {
    DOM.coursesGrid.innerHTML = '<p class="center">No courses found.</p>';
    return;
  }
  
  const coursesHTML = coursesList.map(course => createCourseCard(course)).join('');
  DOM.coursesGrid.innerHTML = coursesHTML;
}

function filterCourses(filterType) {
  const filtered = filterType === 'all' ? COURSES : COURSES.filter(c => c.type === filterType);
  displayCourses(filtered);
}

// ===================================
// FORM VALIDATION FUNCTIONS
// ===================================

function isValidUGPhone(phone) {
  return /^07\d{8}$/.test(phone);
}

function showFormMessage(message, type = 'error') {
  if (!DOM.formMessage) return;
  DOM.formMessage.textContent = message;
  DOM.formMessage.style.color = type === 'error' ? '#f87171' : '#4ade80';
}

function clearFormMessage() {
  if (DOM.formMessage) {
    DOM.formMessage.textContent = '';
  }
}

function validateForm() {
  clearFormMessage();
  const name = document.querySelector('input[name="name"]').value.trim();
  const phone = document.querySelector('input[name="phone"]').value.trim();
  
  if (!name || name.length < 3) {
    showFormMessage('Please enter your full name (min 3 characters)', 'error');
    return false;
  }
  if (!phone || !isValidUGPhone(phone)) {
    showFormMessage('Use UG format: 0772123456', 'error');
    return false;
  }
  return true;
}

// ===================================
// LOGIN MODAL FUNCTIONS
// ===================================

function openLoginModal() {
  if (DOM.loginModal) {
    DOM.loginModal.style.display = 'block';
  }
}

function closeLoginModal() {
  if (DOM.loginModal) {
    DOM.loginModal.style.display = 'none';
  }
}

// ===================================
// EVENT HANDLERS
// ===================================

function handleFilterClick(e) {
  const button = e.target.closest('.filter-btn');
  if (!button) return;
  
  DOM.filterButtons.forEach(btn => btn.classList.remove('active'));
  button.classList.add('active');
  filterCourses(button.dataset.filter);
}

function handleFormSubmit(e) {
  if (!validateForm()) {
    e.preventDefault();
    return;
  }
  showFormMessage('Sending application...', 'success');
}

// AUTH0 LOGIN - You need to sign up first
function handleAuth0Login() {
  alert('NEXT STEPS FOR REAL LOGIN:\n\n1. Go to auth0.com → Sign up FREE\n2. Create Application → Single Page App\n3. Get your Domain & Client ID\n4. Send them to me\n5. I give you 3 lines of code to make login work\n\nAuth0 free tier = 7,000 users. No credit card needed.');
}

// Close modal when clicking outside it
function handleWindowClick(e) {
  if (e.target === DOM.loginModal) {
    closeLoginModal();
  }
}

// ===================================
// INITIALIZATION
// ===================================

function initEventListeners() {
  // Filter buttons
  DOM.filterButtons.forEach(btn => {
    btn.addEventListener('click', handleFilterClick);
  });
  
  // Registration form
  if (DOM.registerForm) {
    DOM.registerForm.addEventListener('submit', handleFormSubmit);
  }
  
  // Login modal
  if (DOM.loginBtn) {
    DOM.loginBtn.addEventListener('click', openLoginModal);
  }
  
  if (DOM.closeModal) {
    DOM.closeModal.addEventListener('click', closeLoginModal);
  }
  
  if (DOM.auth0Login) {
    DOM.auth0Login.addEventListener('click', handleAuth0Login);
  }
  
  // Close modal on outside click
  window.addEventListener('click', handleWindowClick);
}

function init() {
  // Display all courses on page load
  displayCourses(COURSES);
  
  // Set up all event listeners
  initEventListeners();
  
  // Log for debugging
  console.log('Creative Hub Gulu v3.0 Loaded');
  console.log('Program:', CONFIG.programDuration, CONFIG.programFee);
}

// Run when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}