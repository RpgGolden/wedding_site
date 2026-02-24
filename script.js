window.addEventListener('load', () => {
	// открытие шторки
	setTimeout(() => {
		document.body.classList.add('open');
	}, 500);

	const params = new URLSearchParams(window.location.search);
	const guest = params.get('guest');

	const titleEl = document.getElementById('title');
	const namesEl = document.getElementById('names');

	const map = {
		ruslan: {
			title: 'Уважаемые',
			names: 'Максим & Алина',
		},
		anna: {
			title: 'Уважаемая',
			names: 'Анна',
		},
		parents: {
			title: '',
			names: 'Дорогие родители',
		},
		friends: {
			title: '',
			names: 'Дорогие друзья',
		},
	};

	if (guest && map[guest]) {
		const data = map[guest];

		if (titleEl) titleEl.textContent = data.title;
		if (namesEl) namesEl.textContent = data.names;
	}
});
