const btn = document.querySelector('.btn');
const searchBody = document.querySelector('.search-body');
const search = document.querySelector('.search');
const body = document.querySelector('body');
const alert = document.querySelector('.alert');
btn.addEventListener('click', () => {
	searchBody.classList.toggle('active');
	body.classList.toggle('color');
	search.focus();
    search.value = ''
});
