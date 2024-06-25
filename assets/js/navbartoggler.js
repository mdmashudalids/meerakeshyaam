document.addEventListener('DOMContentLoaded', function () {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarIcon = document.getElementById('navbarIcon');
    const navbarCollapse = document.getElementById('navbarTogglerDemo02');

    navbarCollapse.addEventListener('show.bs.collapse', () => {
        navbarIcon.classList.remove('fa-grip-lines');
        navbarIcon.classList.add('fa-times');
    });

    navbarCollapse.addEventListener('hide.bs.collapse', () => {
        navbarIcon.classList.remove('fa-times');
        navbarIcon.classList.add('fa-grip-lines');
    });
});