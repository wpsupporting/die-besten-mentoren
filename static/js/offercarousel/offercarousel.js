window.addEventListener('load', function () {
    const owlCarousel = $('.offer-owl-carousel');

    // Initialisiere Owl Carousel erst nach vollständigem Laden
    owlCarousel.owlCarousel({
        loop: owlCarousel.data('loop') === true,
        autoplay: owlCarousel.data('autoplay') === true,
        autoplayTimeout: owlCarousel.data('slide-speed') || 7000,
        dots: false, // Original Owl Dots deaktiviert
        responsive: {
            0: { items: 1 },
            [owlCarousel.data('breakpoint-small') || 480]: { items: 1 },
            [owlCarousel.data('breakpoint-medium') || 768]: { items: 1 },
            [owlCarousel.data('breakpoint-large') || 1024]: { items: 1 },
        },
    });

    // Pfeilnavigation
    document.querySelector('.offer-carousel-arrow.left').addEventListener('click', function () {
        owlCarousel.trigger('prev.owl.carousel');
    });

    document.querySelector('.offer-carousel-arrow.right').addEventListener('click', function () {
        owlCarousel.trigger('next.owl.carousel');
    });

    // Custom Dots Funktionalität
    const customDots = document.querySelectorAll('.offer-owl-dots .custom-dot');

    customDots.forEach((dot, index) => {
        dot.addEventListener('click', function () {
            owlCarousel.trigger('to.owl.carousel', [index, 300]);
        });
    });

    // Synchronisierung der Custom Dots mit dem Carousel
    owlCarousel.on('changed.owl.carousel', function (event) {
        const currentIndex = event.item.index - event.relatedTarget._clones.length / 2;
        const dotsLength = customDots.length;

        const activeIndex = ((currentIndex % dotsLength) + dotsLength) % dotsLength;

        customDots.forEach((dot, index) => {
            dot.classList.toggle('active', index === activeIndex);
        });
    });
});
