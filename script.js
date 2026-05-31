window.addEventListener('load', () => {
	// открытие шторки
	setTimeout(() => {
		document.body.classList.add('open');
	}, 500);

	const params = new URLSearchParams(window.location.search);
	const guest = params.get('guest');

	const titleEl = document.getElementById('title');
	const namesEl = document.getElementById('names');

	function formatNames(names) {
		const parts = names
			.split(/\s+и\s+/i)
			.map((part) => part.trim())
			.filter(Boolean);

		if (parts.length === 2) {
			return `${parts[0]}<br>и<br>${parts[1]}`;
		}

		return names;
	}

	const map = {
		maksim_alina: {
			title: 'Уважаемые',
			names: 'Максим и Алина',
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
		maksim_natasha: {
			// TTt
			title: 'Уважаемые',
			names: 'Максим и Наталья',
		},
		vyacheslav_salmanov: {
			title: 'Уважаемый',
			names: 'Вячеслав Дмитриевич',
		},
		vyacheslav_gorynov: {
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
		slava_kononenko: {
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
		},
		nadya: {
			title: 'Уважаемая',
			names: 'Надежда Максимовна',
		},
		evgenia: {
			title: 'Уважаемая',
			names: 'Евгения Викторовна',
		},
		victoria_aleksandr: {
			title: 'Уважаемые',
			names: 'Александр Николаевич и Виктория Анатольевна',
		},
		marina: {
			title: 'Уважаемая',
			names: 'Марина Ивановна',
		},
		kostenko: {
			title: 'Уважаемые',
			names: 'Алексей, Анжела и Кирилл',
		},
		olga_vladimir: {
			title: 'Уважаемая',
			names: 'Владимир Александрович и Ольга Николаевна',
		},
		larisa_bab: {
			title: 'Уважаемая',
			names: 'Лариса Николаевна',
		},
		andrey_natalia: {
			title: 'Уважаемые',
			names: 'Андрей Викторович и Наталья Владимировна',
		},
		titskie: {
			title: 'Уважаемые',
			names: 'Максим Сергеевич и Татьяна Александровна',
		},
		aleksandr_anastasia: {
			title: 'Уважаемые',
			names: 'Анастасия и Александр',
		},
		baba_tanya: {
			title: 'Уважаемая',
			names: 'Татьяна Ивановна', // ПЕЧАТЬ
		},
		romanya: {
			title: 'Уважаемые',
			names: 'Сергей Павлович и Наталья Викторовна'
		},
		tatyana: {
			title: 'Уважаемые',
			names: 'Татьяна Сергеевна и Сергей Николаевич'
		}
	};

	if (guest && map[guest]) {
		const data = map[guest];

		if (titleEl) titleEl.textContent = data.title;
		if (namesEl) {
			namesEl.innerHTML = formatNames(data.names);
		}
	}
});
