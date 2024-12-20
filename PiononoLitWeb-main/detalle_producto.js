// Selección de elementos para la cantidad
const inputQuantity = document.querySelector('.input-quantity');
const btnIncrement = document.querySelector('#increment');
const btnDecrement = document.querySelector('#decrement');

// Inicializar el valor por defecto
let valueByDefault = parseInt(inputQuantity.value, 10) || 1;

// Función para actualizar el valor de cantidad en el input
function updateQuantity(newValue) {
    valueByDefault = Math.max(newValue, 1); // No permitir valores menores a 1
    inputQuantity.value = valueByDefault;
}

// Eventos para incrementar y decrementar la cantidad
btnIncrement?.addEventListener('click', () => updateQuantity(valueByDefault + 1));
btnDecrement?.addEventListener('click', () => updateQuantity(valueByDefault - 1));

// Función genérica para alternar contenido
function toggleContent(element) {
    const content = element.nextElementSibling;
    if (!content) return; // Salir si no hay un elemento siguiente

    content.classList.toggle('hidden');

    // Cambiar el ícono
    const icon = element.querySelector('i');
    if (icon) {
        icon.classList.toggle('fa-chevron-up', !content.classList.contains('hidden'));
        icon.classList.toggle('fa-chevron-down', content.classList.contains('hidden'));
    }
}

// Elementos para el toggle de secciones
const toggleDescription = document.querySelector('.title-description');
const toggleAdditionalInformation = document.querySelector('.title-additional-information');
const toggleReviews = document.querySelector('.title-reviews');

// Elementos para el contenido de las secciones
const contentDescription = document.querySelector('.text-description');
const contentAdditionalInformation = document.querySelector('.text-additional-information');
const contentReviews = document.querySelector('.text-reviews');

// Funciones para toggle de las secciones
toggleDescription.addEventListener('click', () => {
	contentDescription.classList.toggle('hidden');
});

toggleAdditionalInformation.addEventListener('click', () => {
	contentAdditionalInformation.classList.toggle('hidden');
});

toggleReviews.addEventListener('click', () => {
	contentReviews.classList.toggle('hidden');
});

