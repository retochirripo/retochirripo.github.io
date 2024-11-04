  // function openModal(title, content, person) {
  //           document.getElementById("modalTitle").innerText = title; // Actualiza el título del modal
  //           document.getElementById("modalContent").innerText = content; // Actualiza el contenido del modal

  //           // Oculta todos los carruseles
  //           document.getElementById("dianaCarousel").style.display = "none";
  //           document.getElementById("jaimeCarousel").style.display = "none";
  //           document.getElementById("yuliCarousel").style.display = "none";
  //           document.getElementById("jonathanCarousel").style.display = "none";
  //                   // Reinicia todos los carruseles a la primera diapositiva
  //           $('#dianaCarousel').carousel(0); // Reinicia el carrusel de Diana
  //           $('#jaimeCarousel').carousel(0); // Reinicia el carrusel de Jaime
  //           $('#yuliCarousel').carousel(0);  // Reinicia el carrusel de Yuliana
  //           $('#jonathanCarousel').carousel(0);  // Reinicia el carrusel de jonathan

  //           // Muestra el carrusel correspondiente
  //           if (person === 'Diana Carolina Segura Bolanos') {
  //               document.getElementById("dianaCarousel").style.display = "block";
  //           } else if (person === 'Jaime Mendez Porras') {
  //               document.getElementById("jaimeCarousel").style.display = "block";
  //           } else if (person === 'Yuliana Valverde Alfaro') {
  //               document.getElementById("yuliCarousel").style.display = "block";
  //           } else if (person === 'Jonathan Mejias Borges') {
  //               document.getElementById("jonathanCarousel").style.display = "block";
  //           }

  //           // Muestra el modal
  //           $('#myModal').modal('show'); // Usa jQuery para mostrar el modal
  //       }

function openModal(title, content, person) {
    document.getElementById("modalTitle").innerText = title; 
    document.getElementById("modalContent").innerText = content; 

    const carouselIds = ["yuliCarousel", "jonathanCarousel", "nataliaCarousel", "mariaCarousel", "joyCarousel", "willianCarousel"]; 

    carouselIds.forEach(id => {
        document.getElementById(id).style.display = "none";
        $('#' + id).carousel(0); // Reinicia el carrusel
    });

    const carousels = {
        'Yuliana Valverde Alfaro': 'yuliCarousel',
        'Jonathan Mejias Borges': 'jonathanCarousel',
        'Natalia Venegas Luna':'nataliaCarousel',
        'Maria Isabel Barquero Herrera':'mariaCarousel',
        'Joy Vargas Barrantes':'joyCarousel',
        'William Alonso Camacho Mejía':'willianCarousel'
    };

    const carouselId = carousels[person];
    if (carouselId) {
        document.getElementById(carouselId).style.display = "block"; 
        $('#' + carouselId).carousel(0); // Reinicia el carrusel
    }

    $('#myModal').modal('show'); // Muestra el modal
}
