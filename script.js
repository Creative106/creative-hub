// GULU CREATIVE HUB - WORKING SCRIPT
document.addEventListener('DOMContentLoaded', function() {
  
  // GET BUTTONS + MODALS
  const sisiBtn = document.getElementById('sisiBtn');
  const sisiModal = document.getElementById('sisiModal');
  const applyBtn = document.getElementById('applyBtn');
  const applyModal = document.getElementById('applyModal');
  const lessonBtn = document.getElementById('lessonBtn');
  const lessonModal = document.getElementById('lessonModal');
  const joinLiveBtn = document.getElementById('joinLiveBtn');
  const closeButtons = document.querySelectorAll('.close');
  
  // OPEN MODALS
  if(sisiBtn) sisiBtn.onclick = () => sisiModal.style.display = 'block';
  if(applyBtn) applyBtn.onclick = () => applyModal.style.display = 'block';
  if(lessonBtn) lessonBtn.onclick = () => lessonModal.style.display = 'block';
  if(joinLiveBtn) joinLiveBtn.onclick = () => lessonModal.style.display = 'block';
  
  // CLOSE MODALS
  closeButtons.forEach(btn => {
    btn.onclick = function() {
      sisiModal.style.display = 'none';
      applyModal.style.display = 'none';
      lessonModal.style.display = 'none';
    }
  });
  
  // CLICK OUTSIDE TO CLOSE
  window.onclick = function(event) {
    if (event.target == sisiModal) sisiModal.style.display = 'none';
    if (event.target == applyModal) applyModal.style.display = 'none';
    if (event.target == lessonModal) lessonModal.style.display = 'none';
  }
  
  // APPLY NOW FORM -> WHATSAPP
  const applyForm = document.getElementById('applyForm');
  if(applyForm) {
    applyForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('applicantName').value;
      const age = document.getElementById('applicantAge').value;
      const phone = document.getElementById('applicantPhone').value;
      const experience = document.getElementById('applicantExperience').value;
      const interest = document.getElementById('applicantInterest').value;
      const why = document.getElementById('applicantWhy').value;
      
      const message = `*Sisi Film Lab 2026 Application*%0A%0A*Name:* ${name}%0A*Age:* ${age}%0A*WhatsApp:* ${phone}%0A*Experience:* ${experience}%0A*Interest:* ${interest}%0A*Why Join:* ${why}`;
      
      window.open(`https://wa.me/256773841953?text=${message}`, '_blank');
      applyModal.style.display = 'none';
      applyForm.reset();
    });
  }
  
  // SISI FILM LAB FORM -> WHATSAPP
  const sisiForm = document.getElementById('sisiForm');
  if(sisiForm) {
    sisiForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('sisiName').value;
      const email = document.getElementById('sisiEmail').value;
      const phone = document.getElementById('sisiPhone').value;
      const level = document.getElementById('sisiLevel').value;
      
      const message = `*Sisi Film Lab 2026 Registration*%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*WhatsApp:* ${phone}%0A*Level:* ${level}`;
      
      window.open(`https://wa.me/256773841953?text=${message}`, '_blank');
      sisiModal.style.display = 'none';
      sisiForm.reset();
    });
  }
});

// MODULE FILTER FOR 10-MONTH PROGRAM
document.addEventListener('DOMContentLoaded', function() {
  
  // ... keep all your existing modal code above this ...
  
  // COURSE MODULE FILTER BUTTONS
  const filterButtons = document.querySelectorAll('.filter-btn');
  const moduleCards = document.querySelectorAll('.module-card');
  
  if(filterButtons.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        
        // 1. Remove 'active' from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // 2. Add 'active' to clicked button
        this.classList.add('active');
        
        // 3. Get filter value
        const filterValue = this.getAttribute('data-filter');
        
        // 4. Show/hide modules
        moduleCards.forEach(card => {
          if (filterValue === 'all') {
            card.style.display = 'block';
          } else {
            if (card.getAttribute('data-category') === filterValue) {
              card.style.display = 'block';
            } else {
              card.style.display = 'none';
            }
          }
        });
      });
    });
  }
});