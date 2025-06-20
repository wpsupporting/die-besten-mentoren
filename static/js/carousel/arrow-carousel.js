document.addEventListener('DOMContentLoaded', function () {
    const owlCarousel = $('.homepage.owl-carousel');

    // Initialisiere Owl Carousel
    owlCarousel.owlCarousel({
        items: 1, // Zeigt nur ein Element pro Slide
        loop: true, // Aktiviert das Endlosschleifen der Slides
        autoplay: owlCarousel.data('autoplay') || true, // Automatisches Durchlaufen
        autoplayTimeout: owlCarousel.data('slide-speed') || 2000, // Geschwindigkeit des automatischen Wechsels
        dots: true // Aktiviert die Punkte-Navigation
    });

    // Pfeilnavigation
    document.querySelector('.carousel-arrow.left').addEventListener('click', function () {
        owlCarousel.trigger('prev.owl.carousel'); // Wechsel zur vorherigen Slide
    });

    document.querySelector('.carousel-arrow.right').addEventListener('click', function () {
        owlCarousel.trigger('next.owl.carousel'); // Wechsel zur nächsten Slide
    });
});
