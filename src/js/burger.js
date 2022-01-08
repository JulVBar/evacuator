function burger() {
   
    const burger = document.querySelector('.burger'),
        burgerMenu = document.querySelector('.burger__menu'),
        burgerBg = document.querySelector('.burger__bg');

    if(burger) {
        burger.addEventListener('click', (e) => {
            burgerMenu.classList.toggle('active');
            burgerBg.classList.toggle('active');
            burger.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
        });
    }

}

export default burger;