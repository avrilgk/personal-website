document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-link');
    const pages = document.querySelectorAll('.page');

    function showPage(target) {
        pages.forEach(function(page) {
            if(page.id === target){
                page.style.display = 'block';
            }
            else {
                page.style.display = 'none';
            }
        });
    }

    navLinks.forEach(function(navLink) {
        navLink.addEventListener('click', function(event) {
            event.preventDefault();
            const target = this.getAttribute('data-target');
            showPage(target);
        });
    });

    showPage('About');

});