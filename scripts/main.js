const button = document.getElementsByClassName('iphone-button')[0];
const body = document.body;

button.addEventListener('click', () => {
	body.classList.contains('js-iphone') ? body.classList.remove('js-iphone') : body.classList.add('js-iphone')
});
