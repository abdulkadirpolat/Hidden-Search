const btn = document.querySelector('.btn');
const searchBody = document.querySelector('.search-body');
const search = document.querySelector('.search');
const body = document.querySelector('body');
const alert = document.querySelector('.alert');
btn.addEventListener('click', () => {
	searchBody.classList.toggle('active');
	body.classList.toggle('color');
	search.focus();
	showAlert(search.value);
});

function showAlert(val) {
	if (search.value !== '') {
		const div = document.createElement('div');
		div.classList = 'message';
		div.textContent = val;
		alert.appendChild(div);

		setTimeout(function () {
			div.remove();
		}, 1000);
		search.value = '';
	}
}
