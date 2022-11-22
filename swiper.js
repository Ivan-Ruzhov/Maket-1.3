if (document.documentElement.clientWidth < 768) {
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        spaceBetween: 16,
        slidesPerView: 1.3,

    });
}

if (document.documentElement.clientWidth >= 768) {
    let elem1 = document.getElementById('stylesheet1')
    elem1.parentNode.removeChild(elem1);

}
