const navDropdownBtn = document.querySelector('.header-mobile__navbar__dropdown-btn');
const navDropdownMenu = document.querySelector('.header-mobile__navbar__dropdown-content');
const navCloseBtn = document.querySelector('.header-mobile__navbar__dropdown-close');

const openMenu = function() {
    if (navDropdownMenu.classList.contains('hide')) {
        navDropdownMenu.classList.remove('hide');
        navDropdownMenu.classList.add('show');
    }
}

const closeMenu = function() {
    if (navDropdownMenu.classList.contains('show')) {
        navDropdownMenu.classList.remove('show');
        navDropdownMenu.classList.add('hide');
    }
}

navDropdownBtn.addEventListener('click', openMenu);
navCloseBtn.addEventListener('click', closeMenu);