
function counter() {
    const counters = document.querySelectorAll('.counter__number');
    
    const counterArea = document.querySelector('.counter');

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

let cc = 1;

	scrollAnimation();
	window.addEventListener('scroll', () => {

		scrollAnimation();
	});


        function animate(counter) {          

            const value = +counter.getAttribute('count');
            
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
        
//   let x = 9860;

//   for (let i = 1; i <= x; i++) {
//         if (x % i == 0) {
//             console.log(i);
//         }
//   }
}

export default counter;









    