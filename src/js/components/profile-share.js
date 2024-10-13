const profilesShare = document.querySelectorAll('.profile-share');

profilesShare?.forEach((element) => {
	const button = element.querySelector('.profile-share-button');
	const content = element.querySelector('.profile-share-content');

	function setContentWidth() {
		if (content) {
			const contentWidth = content.offsetWidth;
			element.style.setProperty('--share-width-content', `${contentWidth}px`);
		}
	}

	setContentWidth();

	window.addEventListener('resize', setContentWidth);

	if (button) {
		button.addEventListener('click', () => {
			element.classList.toggle('is-open');
		});
	}
});