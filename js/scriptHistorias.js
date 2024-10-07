// Inicializa los carruseles
var dianaCarousel = $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    center: true,
    margin: 24,
    dots: true,
    loop: true,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        992: {
            items: 3
        }
    }
});

// Aquí puedes inicializar otros carruseles de la misma forma
var jaimeCarousel = $("#jaimeCarousel").owlCarousel({
    // Configuración del carrusel de Jaime
});
var yuliCarousel = $("#yuliCarousel").owlCarousel({
    // Configuración del carrusel de Yuli
});

// Función para abrir el modal
function openModal(title, content, person) {
    document.getElementById("modalTitle").innerText = title; // Actualiza el título del modal
    document.getElementById("modalContent").innerText = content; // Actualiza el contenido del modal

    // Oculta todos los carruseles
    document.getElementById("dianaCarousel").style.display = "none";
    document.getElementById("jaimeCarousel").style.display = "none";
    document.getElementById("yuliCarousel").style.display = "none";

    // Muestra el carrusel correspondiente y reinicia
    if (person === 'Diana Carolina Segura Bolanos') {
        document.getElementById("dianaCarousel").style.display = "block";
        dianaCarousel.trigger('to.owl.carousel', 0); // Reinicia el carrusel de Diana
    } else if (person === 'Jaime Mendez Porras') {
        document.getElementById("jaimeCarousel").style.display = "block";
        jaimeCarousel.trigger('to.owl.carousel', 0); // Reinicia el carrusel de Jaime
    } else if (person === 'Yuliana Valverde Alfaro') {
        document.getElementById("yuliCarousel").style.display = "block";
        yuliCarousel.trigger('to.owl.carousel', 0); // Reinicia el carrusel de Yuli
    }

    // Muestra el modal
    $('#myModal').modal('show'); // Usa jQuery para mostrar el modal
}
