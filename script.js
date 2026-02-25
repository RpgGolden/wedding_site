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
		nastya_artem: {
			title: 'Уважаемые',
			names: 'Анастасия и Артем',
		},
		nastya: {
			title: 'Уважаемая',
			names: 'Анастасия Морозова',
		},
		danila: {
			title: 'Уважаемый',
			names: 'Данила Махирович',
		},
		danil: {
			title: 'Уважаемый',
			names: 'Данил Романович',
		},
		katya: {
			title: 'Уважаемая',
			names: 'Екатерина Фёдоровна',
		},
		sergey: {
			title: 'Уважаемый',
			names: 'Сергей Сергеевич',
		},
		nikitapopov: {
			title: 'Уважаемый',
			names: 'Никита Сергеевич',
		},
		nikita_alena: {
			title: 'Уважаемые',
			names: 'Никита и Алёна',
		},
		maksim_natasha:{ // TTt
			title: 'Уважаемые',
			names: 'Максим и Наталья',
		},
		slava: {
			title: 'Уважаемый',
			names: 'Вячеслав Дмитриевич',
		},
		vyacheslav: {
			title: 'Уважаемый',
			names: 'Вячеслав Евгеньевич',
		},
		denis_liza: {
			title: 'Уважаемые',
			names: 'Денис и Елизавета',
		},
		arina_andrey: {
			title: 'Уважаемые',
			names: 'Арина и Андрей',
		},
		victoria: {
			title: 'Уважаемая',
			names: 'Виктория Ивановна',
		},
		slavak: {
			title: 'Уважаемый',
			names: 'Вячеслав Валерьевич',
		},
		darya: {
			title: 'Уважаемая',
			names: 'Дарья Владимировна',
		},
		natalia_diana: {
			title: 'Уважаемые',
			names: 'Наталья и Диана',
		}
		
	};

	if (guest && map[guest]) {
		const data = map[guest];

		if (titleEl) titleEl.textContent = data.title;
		if (namesEl) namesEl.textContent = data.names;
	}
});
