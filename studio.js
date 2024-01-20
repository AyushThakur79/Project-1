//  lenis for smmoth scrolling

const lenis = new Lenis();

lenis.on("scroll", (e) => {
	console.log(e);
});

function raf(time) {
	lenis.raf(time);
	requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// ends

// swiper

function swipperAnimation() {
	var swiper = new Swiper(".mySwiper", {
		slidesPerView: "auto",
		centeredSlides: false,
		spaceBetween: 50,
	});
}

swipperAnimation();
