if (document.documentElement.clientWidth < 768) {
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        spaceBetween: 16,
        slidesPerView: 1.3,
        breakpoints: {
            320: {
                slidesPerView: 1.3,
                spaceBetween: 16
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            640: {
                slidesPerView: 3,
                spaceBetween: 80
            }
        }
    });
}

const button = document.querySelector('.button');
let listItems = document.querySelectorAll('.swiper-slide-hidden-one');
let buttonClick = true;
if (document.documentElement.clientWidth >= 1120) {
    listItems[0].classList.remove('swiper-slide-hidden-one');
    listItems[1].classList.remove('swiper-slide-hidden-one');
    listItems = document.querySelectorAll('.swiper-slide-hidden-one');
}
button.addEventListener('click', function () {
    for (let i = 0; i < listItems.length; i++) {
        if (buttonClick === true) {
            listItems[i].classList.toggle('swiper-slide-hidden-one');
        }
    }

    if(button.classList.contains("arrow-up")) {
        button.textContent = 'Показать все'
        button.classList.remove('arrow-up')
        button.classList.add('arrow-down')
    } else if (button.classList.contains("arrow-down")) {
        button.textContent = 'Скрыть'
        button.classList.add('arrow-up')
        button.classList.remove('arrow-down')
    }
    return buttonClick;

});