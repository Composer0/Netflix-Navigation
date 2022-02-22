const open_btn = document.querySelector('.open-btn')
const close_btn = document.querySelector('.close-btn')
const nav = document.querySelectorAll('.nav')

open_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.add('visible'))
})
    // el is natural to add to elements becuase it means that you will be modifying it. nav_el changes to nav_el visible because we are adding classlist to the nav. Nav will then read as nav visible in the class.
close_btn.addEventListener('click', () => {
    nav.forEach(nav_el => nav_el.classList.remove('visible'))
})