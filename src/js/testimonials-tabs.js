
function testimonialsTabs() {
    
    const tabs = document.querySelectorAll('.testimonials__photo'),
        tabsContent = document.querySelectorAll('.testimonials__content'),
        tabsParent = document.querySelector('.testimonials__header');


    function hideTabContent() { //скрывает вкладку
        tabsContent.forEach(item => { // скрываем отображение вкладки
            item.classList.add('hide');
            item.classList.remove('show', 'fadeIn');
        });

        tabs.forEach(item => { // убираем подсветку активного выбора меню
            item.classList.remove('active');
        });
    }


    function showTabContent(i = 0) {
        if (tabsContent[i]) {
            tabsContent[i].classList.add('show', 'fadeIn');
            tabsContent[i].classList.remove('hide');
            tabs[i].classList.add('active');
        } else {
            tabsContent[tabsContent.length - 1].classList.add('show', 'fadeIn');
            tabsContent[tabsContent.length - 1].classList.remove('hide');
            tabs[i].classList.add('active');
        }
    }


    if (tabsContent.length > 0) {
        hideTabContent();
        showTabContent();

        tabsParent.addEventListener('mouseover', (event) => {
        
            const target = event.target; // создаем для простоты записи
    
            if (target && target.classList.contains('testimonials__photo')) { // делигируем события(событие на все кнопки в блоке)
                
                
                tabs.forEach((item, i) => { // перебираем все табы, и когда кликнутый таб совпадет с табом из массива показываем
                    if (target == item) {
                        hideTabContent();
                        showTabContent(i);
                    }
                });
            }
        });
    } else {
        document.querySelector('.testimonials').style.display = 'none';
    }

    
}


export default testimonialsTabs;