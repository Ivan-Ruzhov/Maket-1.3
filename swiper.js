if (document.documentElement.clientWidth < 768) {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        spaceBetween: 16,
        slidesPerView: 1.3,
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1.3,
                spaceBetween: 16
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 3,
                spaceBetween: 80
            }
        }
    });
}

if (document.documentElement.clientWidth >= 768) {
    const elem1 = document.querySelector('link')
    elem1.parentNode.removeChild(elem1);
    const elem2 = document.querySelector('script')
    elem2.parentNode.removeChild(elem2);
}
let button = document.querySelector('.button');
let listItems = document.querySelectorAll('.swiper-slide-hidden-one');
let buttonClick = false;
if (document.documentElement.clientWidth >= 1120) {
    listItems[0].classList.remove('swiper-slide-hidden-one');
    listItems[1].classList.remove('swiper-slide-hidden-one');
    listItems = document.querySelectorAll('.swiper-slide-hidden-one');
}
button.addEventListener('click', function () {
    for (let i = 0; i < listItems.length; i++) {
        if (buttonClick) {
            listItems[i].classList.add('swiper-slide-hidden-one');
        } else {
            listItems[i].classList.remove('swiper-slide-hidden-one');
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
    buttonClick = !buttonClick;
    return buttonClick;

});