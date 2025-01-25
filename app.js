document.addEventListener("DOMContentLoaded", function () {
    const expandBtns = document.querySelectorAll('.expand-btn');
    
    expandBtns.forEach(button => {
      button.addEventListener('click', function () {
        const extraContent = button.nextElementSibling;
        extraContent.classList.toggle('hidden');
        button.textContent = extraContent.classList.contains('hidden') ? 'Expand for more' : 'Collapse';
      });
    });
  });
  