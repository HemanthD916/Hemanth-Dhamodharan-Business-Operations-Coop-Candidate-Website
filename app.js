(function(){
  const btn = document.querySelector('[data-menu-btn]');
  const nav = document.querySelector('[data-navlinks]');
  if(btn && nav){
    btn.addEventListener('click', function(){
      const open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  const year = document.querySelector('[data-year]');
  if(year){
    year.textContent = String(new Date().getFullYear());
  }

  const copyBtn = document.querySelector('[data-copy-email]');
  const emailEl = document.querySelector('[data-email]');
  if(copyBtn && emailEl){
    copyBtn.addEventListener('click', async function(){
      const email = emailEl.textContent.trim();
      try{
        await navigator.clipboard.writeText(email);
        copyBtn.textContent = 'Copied';
        setTimeout(() => { copyBtn.textContent = 'Copy Email'; }, 1200);
      }catch(e){
        window.location.href = 'mailto:' + email;
      }
    });
  }
})();
