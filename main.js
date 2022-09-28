// Grab elements
const selectElement = selector => {
    const element = document.querySelector(selector)
    if(element) return element;
    throw new Error('Something went wrong, make sure that $(selector) exists or is typed correctly.');
};
//Nav styles on scroll
const scrollHeader = () => {
    const headerElement = selectElement('#header');
    if(this.scrollY >= 15){
        headerelement.classlist.add('activated');
    }else{
        headerelement.classlist.remove('activated'); 
    }
};

window.addEventListener('scroll', scrollHeader)
// Open menu & search pop-up
const menuToggleicon = selectElement('menu-toggle-icon');

const toggleMenu = () => {
    const mobileMenu - selectElement('#menu');
    mobileMenu.classList.toggle('activated');
    menuToggleIcon.classList.toggle('acitvated');
};

menuToggleIcon.addEvenetListener('click', toggleMenu)
// Open/Close search form popup

// -- Close the search form popup on ESC keypress

// Switch theme/add to local storage

// Swiper
