const modalConfirmed = () => {
	const modal = document.getElementById('ageModal');
	const confirmButton = document.getElementById('confirmAge');
	const declineButton = document.getElementById('declineAge');
	const pageContent = document.getElementById('pageContent');

	modal.style.display = 'flex';

	pageContent.style.display = 'none';

	confirmButton.onclick = function() {
		modal.style.display = 'none';
		pageContent.style.display = 'block';
		console.log('Возраст подтвержден');
	};

	declineButton.onclick = function() {
		modal.style.display = 'none';
		window.location.href = 'https://www.disney.com/';
		console.log('Возраст не подтвержден');
	};
}

const cookieWarning = () => {
	document.addEventListener('DOMContentLoaded', function () {
		const cookieNotice = document.getElementById('cookieNotice');
		const acceptButton = document.getElementById('acceptCookies');

		acceptButton.addEventListener('click', function () {
			cookieNotice.style.display = 'none';
		});
	});
}


modalConfirmed()
cookieWarning()