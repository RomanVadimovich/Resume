const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,


    effect: 'cube',


    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        // dynamicBullets: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    },

    // autoplay: {
    //     delay: 5000,
    // },


});

