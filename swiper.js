if (document.documentElement.clientWidth < 768) {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            enabled: true,
        },
        spaceBetween: 16,
        slidesPerView: 1.3,

    });
}

if (document.documentElement.clientWidth >= 768) {
    let elem1 = document.getElementById('stylesheet1')
    elem1.parentNode.removeChild(elem1);
    let elem2 = document.getElementById('swiper')
    elem2.parentNode.removeChild(elem2);
}
let button = document.querySelector('.arrow-up');
let listItems = document.querySelectorAll('.swiper-slide-hidden-one');
let buttonclick = false;

if (document.documentElement.clientWidth >= 1120) {
    listItems[0].classList.remove('swiper-slide-hidden-one');
    listItems[1].classList.remove('swiper-slide-hidden-one');
    listItems = document.querySelectorAll('.swiper-slide-hidden-one');
}
button.addEventListener('click', function () {
    for (let i = 0; i < listItems.length; i++) {
        if (buttonclick) {
            listItems[i].classList.add('swiper-slide-hidden-one');
        } else {
            listItems[i].classList.remove('swiper-slide-hidden-one');
        }
    }
    buttonclick = !buttonclick;
    if (buttonclick) {
        button.textContent = "Скрыть";
        button.classList.remove('arrow-down')
        button.classList.add('arrow-up')
    } else {
        button.textContent = "Показать все";
        button.classList.remove('arrow-up')
        button.classList.add('arrow-down')
    }
    return buttonclick;
});