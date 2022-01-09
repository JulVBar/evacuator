

function navigation() {
    const navLinks = document.querySelectorAll('.nav__link'),
        pageId = document.querySelector('main').getAttribute('id');

        navLinks.forEach(link => {
            link.classList.remove('active');
        if(link.getAttribute('data-nav') === pageId) {
            link.classList.add('active');
        }
    });
}

export default navigation;
