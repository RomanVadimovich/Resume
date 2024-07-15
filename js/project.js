const swiper2 = new Swiper('.swiper2', {
    direction: 'horizontal',
    loop: true,

    effect: 'flip',

    flipEffect: {
        slideShadows: true,
        limitRotation: true,
    },

    pagination: {
        el: '.swiper-pagination2',
        clickable: true,
    },


    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

});