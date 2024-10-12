const headerUnion = document.querySelector('.header-union')
const headerNav = document.querySelector('.header-nav')
const headerNavLinks = document.querySelectorAll('.header-nav .header-nav-link')

function updateHeaderUnionPosition() {
	headerNavLinks.forEach((link) => {
		if (link.classList.contains('is-active')) {
			const linkRect = link.getBoundingClientRect()
			const leftOffset = linkRect.left + window.scrollX
			headerUnion.style.transform = `translateX(${leftOffset - 16}px)`
		}
	})
}

function getHeaderNavHeight() {
	const headerNavHeight = headerNav.offsetHeight
	document.documentElement.style.setProperty('--header-nav-height', `${headerNavHeight}px`)
}

document.addEventListener('DOMContentLoaded', updateHeaderUnionPosition)
window.addEventListener('load', getHeaderNavHeight)
window.addEventListener('resize', () => {
	getHeaderNavHeight()
	updateHeaderUnionPosition()
})