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
        $(".testimonial-carousel").trigger('to.owl.carousel', 0); // Reinicia el carrusel de Diana
    } else if (person === 'Jaime Mendez Porras') {
        document.getElementById("jaimeCarousel").style.display = "block";
        $("#jaimeCarousel").trigger('to.owl.carousel', 0); // Reinicia el carrusel de Jaime
    } else if (person === 'Yuliana Valverde Alfaro') {
        document.getElementById("yuliCarousel").style.display = "block";
        $("#yuliCarousel").trigger('to.owl.carousel', 0); // Reinicia el carrusel de Yuli
    }

    // Muestra el modal
    $('#myModal').modal('show'); // Usa jQuery para mostrar el modal
}
