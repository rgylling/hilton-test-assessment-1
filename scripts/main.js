const button = document.getElementsByClassName('iphone-button')[0];
const body = document.body;

button.addEventListener('click', function () {
	if (body.classList.contains('js-iphone')) {
		body.classList.remove('js-iphone');
	} else {
		body.classList.add('js-iphone')
	}
});
