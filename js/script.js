//!--Burger--

const burger = document.querySelector('.burger'),
	close = document.querySelector('.close'),
	nav = document.querySelector('.header__nav'),
	body = document.querySelector('body');


burger.addEventListener('click', () => {
	nav.classList.add('header__nav--active');
	body.classList.add('js-scroll');
})

close.addEventListener('click', () => {
	nav.classList.remove('header__nav--active');
	body.classList.remove('js-scroll');
})


//!--Filters--


const filter = document.querySelector('.filter');

if (filter) {
	const items = filter.querySelectorAll('.block-filter')

	items.forEach(item => {
		item.addEventListener('click', e => {
			item.querySelector('.block-filter__dropdown').classList.toggle('active');
			item.querySelector('.block-filter__icon').classList.toggle('active');

		if (e.target.classList.contains('block-filter__item')) {
			item.querySelector('.block-filter__value').textContent = e.target.textContent;
		}

		if(item.target === '.hero__descr descr') {
			item.querySelector('.block-filter__icon').classList.remove('active');
		}
		})
	})
}


document.addEventListener('keydown', (e) => {
	const itemsa = filter.querySelectorAll('.block-filter')

	itemsa.forEach(item => {
	if(e.code == 'Escape') {
		item.querySelector('.block-filter__icon').classList.remove('active');
		item.querySelector('.block-filter__dropdown').classList.remove('active');
		item.querySelector('.block-filter__icon').classList.remove('active');
	}})
});


//!--Swiper 1--

const popular = new Swiper('.slider-popular', {
	spaceBetween: 20,
	slidesPerView: 3,
	// loop:true,
	navigation: {
	  nextEl: '.popular-swiper-next',
	  prevEl: '.popular-swiper-prev',
	},
	breakpoints: {
		350: {
		  slidesPerView: 1,
		},
		660: {
		  slidesPerView: 2,
		},
		910: {
		  slidesPerView: 3,
		}
	  }
  });

  //!--Swiper 2--

const reviews = new Swiper('.slider-reviews', {
	spaceBetween: 20,
	slidesPerView: 1,
	autoHeight: true,
	// loop:true,
	navigation: {
	  nextEl: '.slider-reviews-next',
	  prevEl: '.slider-reviews-prev',
	},
  });