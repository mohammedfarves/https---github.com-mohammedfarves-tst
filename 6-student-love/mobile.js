function toggleMobileMenu(menu) {
    const mobileMenu = document.querySelector('.mobile-menu'); // Select the menu
    const hamburgerIcon = document.querySelector('#hamburger-icon'); // Select the icon
    mobileMenu.classList.toggle('open'); // Toggle 'open' for the menu
    hamburgerIcon.classList.toggle('open'); // Toggle 'open' for the icon
}
