

function btnToTop() {

    const btnTop = document.querySelectorAll('.button-to-top');
    
    function btnToTopShow() {
        if (window.pageYOffset !== 0) {
            btnTop.forEach(elem => {
                elem.classList.add('active');
            });
        } else {
            btnTop.forEach(elem => {
                elem.classList.remove('active');
            });
        }
    }
    
    window.addEventListener('scroll', btnToTopShow);
    
    btnTop.forEach(elem => {
        elem.addEventListener('click', function (e) {
            e.preventDefault();
        
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });
}

export default btnToTop;