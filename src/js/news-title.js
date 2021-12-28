

function newsTitleLimit() {

    
    const recentPosts= document.querySelector('.footer__posts'),
        postTitle = document.querySelectorAll('.post__title');

    if(recentPosts) {
        const recentPostLinks = recentPosts.querySelectorAll('a');
        limitString(recentPostLinks, 30);
    }

    if(postTitle) {
        limitString(postTitle, 51);
    }

    function limitString(titleArr, numberOfElements) {

        numberOfElements = +numberOfElements;

        if (titleArr.length > 0) {

            titleArr.forEach(link => {
                let string = link.textContent;
                
                if (string.length > numberOfElements) {
                    string = string.slice(0, numberOfElements) + '...';
    
                    link.textContent = string;
                }
            });
        }
    }
}

export default newsTitleLimit;
