
function counter() {

    const counters = document.querySelectorAll('.counter__number');
    const counterArea = document.querySelector('.counter');
    let cc = 1;

	const scrollAnimation = () => {
		let windowCenter = (window.innerHeight) + window.scrollY;
	
        let scrollOffset = counterArea.offsetTop + (counterArea.offsetHeight / 2);
        if (windowCenter >= scrollOffset) {
            if (cc < 2) {
                counters.forEach( counter => {
                    animate(counter);
                });
            }
        }
	};

    function animate(counter) {          

        const value = +counter.getAttribute('data-count');
        
        const time = 1500;
        let step = 1; 
        if (value > 100) {
            step = 116;
        }
        let n = 0;
        let t = Math.round(time/(value/step));
        let interval = setInterval(() => {
            n = n + step;
            if(n == value) {
                clearInterval(interval);
                cc = cc + 2;
            }
        counter.innerText = n;
        }, t);
        
    }

	scrollAnimation();

	window.addEventListener('scroll', () => {
		scrollAnimation();
	});
}

export default counter;









    