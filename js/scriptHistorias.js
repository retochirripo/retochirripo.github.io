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
    // Actualiza el título y contenido del modal
    document.getElementById("modalTitle").innerText = title; 
    document.getElementById("modalContent").innerText = content; 

    const carouselIds = ["daneyCarousel", "diegoCarousel", "jaimeCarousel", "oscarCarousel", "joseCarousel", "javierCarousel"]; 

    // Oculta todos los carruseles y reinicia su estado
      carouselIds.forEach(id => {
        const carouselElement = document.getElementById(id);
        carouselElement.style.visibility = "hidden"; // Cambia a invisible en lugar de display:none
        $('#' + id).carousel(0); // Reinicia el carrusel
    });


    // Mapa de personas a carruseles
    const carousels = {
    'Daney Obando Fonseca': 'daneyCarousel',
    'Diego Ramirez Alfaro': 'diegoCarousel',
    'Jaime Mendez Porras': 'jaimeCarousel',
    'Oscar Martinez Herrera': 'oscarCarousel',
    'Jose Alfredo Vasquez Rojas': 'joseCarousel',
    'Javier Quesada Rodriguez': 'javierCarousel'

    };

    // Muestra el carrusel correspondiente
    const carouselId = carousels[person];
    if (carouselId) {
        const selectedCarousel = document.getElementById(carouselId);
        selectedCarousel.style.visibility = "visible"; // Cambia a visible
    }

    // Muestra el modal
    $('#myModal').modal('show'); // Usa jQuery para mostrar el modal

   
    // Limpia eventos previos para evitar duplicaciones
    $('#myModal').off('shown.bs.modal').on('shown.bs.modal', function () {
        if (carouselId) {
            $('#' + carouselId).carousel(0); // Reinicia el carrusel al abrir el modal
        }
    });
    
    }


