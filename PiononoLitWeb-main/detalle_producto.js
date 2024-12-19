// Elementos para la cantidad
const inputQuantity = document.querySelector('.input-quantity');
const btnIncrement = document.querySelector('#increment');
const btnDecrement = document.querySelector('#decrement');

// Variable para el valor por defecto
let valueByDefault = parseInt(inputQuantity.value);

// Funciones para incrementar y decrementar la cantidad
btnIncrement.addEventListener('click', () => {
	valueByDefault += 1;
	inputQuantity.value = valueByDefault;
});

btnDecrement.addEventListener('click', () => {
	if (valueByDefault === 1) {
		return;  // No permitir que el valor sea menor a 1
	}
	valueByDefault -= 1;
	inputQuantity.value = valueByDefault;
});

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
