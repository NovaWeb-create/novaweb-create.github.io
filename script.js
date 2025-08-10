/* FILE: script.js */
(function(){
  // Mobile nav toggle
  const nav = document.getElementById('mainNav');
  const toggle = document.getElementById('navToggle');
  toggle.addEventListener('click', ()=>{
    if(nav.style.display === 'flex'){
      nav.style.display = 'none';
    } else {
      nav.style.display = 'flex';
      nav.style.flexDirection = 'column';
      nav.style.position = 'absolute';
      nav.style.right = '16px';
      nav.style.top = '64px';
      nav.style.background = 'white';
      nav.style.padding = '12px';
      nav.style.borderRadius = '8px';
      nav.style.boxShadow = '0 8px 24px rgba(2,6,23,0.12)';
    }
  });

  // Newsletter form submit (simulated)
  const form = document.getElementById('newsletterForm');
  if(form){
    form.addEventListener('submit', (e)=>{
      e.preventDefault();
      const email = form.elements['email'].value;
      if(!email) return alert('Por favor ingresa un correo.');
      alert('¡Gracias! Te hemos suscrito — ' + email);
      form.reset();
    });
  }

  // Simple CTA pulse for scarce items
  const strip = document.querySelector('.strip');
  if(strip){
    setInterval(()=>{ strip.style.opacity = strip.style.opacity === '0.65' ? '1' : '0.65'; }, 1000);
  }
})();
