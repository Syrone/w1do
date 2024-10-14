import Swiper from 'swiper'

const swiperCardClass = document.querySelectorAll('.swiper-card')

swiperCardClass?.forEach((element) => {
	new Swiper(element, {
		slidesPerView: 'auto',
		spaceBetween: 4,
	})
})