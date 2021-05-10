// menu
const burger = document.querySelector('.menu-burger');
burger.addEventListener('click', () => burger.classList.toggle('active'));
// end menu


// modals 
const makeModal = modalSel => {
	const modalEl = document.querySelector(modalSel);
		  btnEl = document.querySelector(modalSel + '-btn'),
		  closeEl = document.querySelector(modalSel + ' .modal-wrapper__bg'),

	btnEl.addEventListener('click', () => modalEl.classList.add('active'));
	closeEl.addEventListener('click', () => modalEl.classList.remove('active'));
}

makeModal('#modal-1');
makeModal('#modal-2');
// end modals

// button scroll top
const buttonTopIcon = document.querySelector('.buttonTop');
buttonTopIcon.addEventListener('click', e => window.scrollTo(0, 0));
// end button scroll top