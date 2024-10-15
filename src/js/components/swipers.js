import Swiper from 'swiper'

const swiperCardClass = document.querySelectorAll('.swiper-card')
const swiperBannerClass = document.querySelectorAll('.swiper-banner')

swiperCardClass?.forEach((element) => {
	new Swiper(element, {
		slidesPerView: 'auto',
		spaceBetween: 4,
	})
})

swiperBannerClass?.forEach((element) => {
	new Swiper(element, {
		initialSlide: 1,
		slidesPerView: 1,
		spaceBetween: 4,
	})
})