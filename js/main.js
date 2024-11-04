document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('#cont-global section');
    let currentSectionIndex = 0;

    // Mostrar la primera sección por defecto
    sections[currentSectionIndex].classList.add('active');

    // Función para actualizar la visibilidad de las secciones
    function showSection(index) {
        sections.forEach((section, i) => {
            section.classList.remove('active');
            if (i === index) {
                section.classList.add('active');
            }
        });
    }

    // Event listener para el botón "Siguiente"
    document.getElementById('next').addEventListener('click', function () {
        if (currentSectionIndex < sections.length - 1) {
            currentSectionIndex++;
            showSection(currentSectionIndex);
        }
    });

    // Event listener para el botón "Anterior"
    document.getElementById('prev').addEventListener('click', function () {
        if (currentSectionIndex > 0) {
            currentSectionIndex--;
            showSection(currentSectionIndex);
        }
    });
});
