window.onload = () => {
  const toggle = document.getElementById('toggle');
  const modal = document.querySelector('.header-nav-modal');
  
  const menutoggle = () => {
    if (modal.classList.contains('hideformobile')) {
      modal.classList.remove('hideformobile');
    } else {
      modal.classList.add('hideformobile');
    }
  };
  
  toggle.addEventListener('click', menutoggle);
};