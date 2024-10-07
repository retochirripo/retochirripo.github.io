 function openModal(title, imageUrl, content) {
        // Asignar el título
        document.getElementById('modalTitle').textContent = title;
        
        // Asignar la URL de la imagen
        document.getElementById('modalImage').src = imageUrl;
        
        // Asignar el contenido adicional
        document.getElementById('modalContent').textContent = content;
        
        // Mostrar el modal
        var modal = new bootstrap.Modal(document.getElementById('imageModal'));
        modal.show();
    }