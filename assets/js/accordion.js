document.addEventListener('DOMContentLoaded', function () {
    const accordionItems = document.querySelectorAll('.accordion-lektionenliebde-btn');

    accordionItems.forEach(item => {
        item.addEventListener('click', function () {
            const content = this.nextElementSibling;
            const icon = this.querySelector('.accordion-icon');

            // Toggle für Inhalte
            if (content.classList.contains('open')) {
                content.classList.remove('open');
                content.style.display = 'none';
                icon.textContent = '+';
            } else {
                content.classList.add('open');
                content.style.display = 'block';
                icon.textContent = '−';
            }
        });
    });
});
