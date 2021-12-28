function modal() {

    const modalBackground = document.querySelector('.modal__background'),
        modal = document.querySelector('.modal');

    function openModal() {
        modal.classList.add('modal-open');
        modal.classList.remove('modal-close');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.add('modal-close');
        modal.classList.remove('modal-open');
        document.body.style.overflow = '';
    }

    modal.addEventListener('click', (e) => {
        if (e.target === modalBackground || e.target.getAttribute('data-close') == '') {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('modal-open')) {
            closeModal();
        }
    });

    function showModalByScroll() { 
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll); 
}

export default modal;
