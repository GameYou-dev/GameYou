    const toggleText = document.getElementById('search_text');
    const menu = document.getElementById('search_menu');
    
    toggleText.addEventListener('click', () => {
      toggleText.classList.toggle('active');
      menu.classList.toggle('active');
    });