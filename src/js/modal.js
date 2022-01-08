function modal() {

    const modalBackground = document.querySelector('.modal__background'),
        modal = document.querySelector('.modal'),
        scroll = calcScroll();

    function openModal() {
        modal.classList.add('modal-open');
        modal.classList.remove('modal-close');
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${scroll}px`;
    }

    function closeModal() {
        modal.classList.add('modal-close');
        modal.classList.remove('modal-open');
        document.body.style.overflow = '';
        document.body.style.marginRight = `0px`;
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

    function calcScroll() {
        let div = document.createElement('div');
    
        div.style.width = '50px';
        div.style.height = '50px';
        div.style.overflowY = 'scroll';
        div.style.visability = 'hidden';
        document.body.appendChild(div);
        
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();
    
        return scrollWidth;
    }
}

export default modal;
