$(document).ready(function () {
    // Huidige weergegeven diavoorstelling
    let currentSlide = 0;
    // Aantal items per diavoorstelling
    const itemsPerSlide = 4;
    // Totaal aantal dia's gebaseerd op het aantal items
    const totalSlides = Math.ceil($('.item-slide').length / itemsPerSlide);

    // Functie om dia's bij te werken op basis van de huidige dia
    function updateSlides() {
        // Verberg alle dia-items
        $('.item-slide').addClass('cs-hidden');

        // Bepaal welke items zichtbaar moeten zijn op basis van de huidige dia
        let startIdx = currentSlide * itemsPerSlide;
        for (let i = startIdx; i < (startIdx + itemsPerSlide); i++) {
            $('.item-slide').eq(i).removeClass('cs-hidden');
        }
    }

    // Toon de eerste 4 items bij het laden van de pagina
    updateSlides();

    // Event listener voor carousel knoppen
    $('.carousel-btn').click(function () {
        // Als op de "volgende" knop wordt geklikt
        if ($(this).hasClass('next-btn')) {
            if (currentSlide < totalSlides - 1) {
                currentSlide++;
                updateSlides();
            }
        }

        // Als op de "vorige" knop wordt geklikt
        if ($(this).hasClass('prev-btn')) {
            if (currentSlide > 0) {
                currentSlide--;
                updateSlides();
            }
        }
    });
});
