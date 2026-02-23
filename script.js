window.addEventListener('load', () => {
	// открытие шторки
	setTimeout(() => {
		document.body.classList.add('open');
	}, 500);

	// ===== персональные имена =====
	const params = new URLSearchParams(window.location.search);
	const guest = params.get('guest');

	const el = document.getElementById('names');

	const map = {
		ruslan: 'Руслан & Елизавета',
		anna: 'Анна & Иван',
		parents: 'Дорогие родители',
		friends: 'Дорогие друзья',
	};

	if (guest && map[guest] && el) {
		el.textContent = map[guest];
	}
});
