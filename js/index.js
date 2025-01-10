const modalConfirmed = () => {
	const modal = document.getElementById('ageModal');
	const confirmButton = document.getElementById('confirmAge');
	const declineButton = document.getElementById('declineAge');
	const pageContent = document.getElementById('pageContent');

	if (sessionStorage.getItem('ageConfirmed') === 'true') {
		modal.style.display = 'none';
		pageContent.style.display = 'block';
	} else {
		modal.style.display = 'flex';
		pageContent.style.display = 'none';
	}

	confirmButton.onclick = function() {
		sessionStorage.setItem('ageConfirmed', 'true');
		modal.style.display = 'none';
		pageContent.style.display = 'block';
		console.log('Возраст подтвержден');
	};

	declineButton.onclick = function() {
		modal.style.display = 'none';
		window.location.href = 'https://www.disney.com/';
		console.log('Возраст не подтвержден');
	};
};

const cookieWarning = () => {
	const cookieNotice = document.getElementById('cookieNotice');
	const acceptButton = document.getElementById('acceptCookies');

	if (sessionStorage.getItem('cookiesAccepted') === 'true') {
		cookieNotice.style.display = 'none';
	} else {
		cookieNotice.style.display = 'flex';
	}

	acceptButton.addEventListener('click', function () {
		sessionStorage.setItem('cookiesAccepted', 'true');
		cookieNotice.style.display = 'none';
		console.log('Cookies приняты');
	});
};

modalConfirmed();
cookieWarning();
