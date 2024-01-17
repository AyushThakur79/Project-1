// lenis for smmoth scrolling 

// const lenis = new Lenis()

// lenis.on('scroll', (e) => {
//   console.log(e)
// })

// function raf(time) {
//   lenis.raf(time)
//   requestAnimationFrame(raf)
// }

// requestAnimationFrame(raf)

// ends

// page 3 animation

function Page3Animation() {
	var elemC = document.querySelector("#elem-container");
	var fixed = document.querySelector("#fixed-image");
	elemC.addEventListener("mouseenter", function () {
		fixed.style.display = "block";
	});
	elemC.addEventListener("mouseleave", function () {
		fixed.style.display = "none";
	});

	var elems = document.querySelectorAll(".elem");
	elems.forEach(function (e) {
		e.addEventListener("mouseenter", function () {
			var image = e.getAttribute("data-image");
			fixed.style.backgroundImage = `url(${image})`;
		});
	});
}

Page3Animation();

// swiper

function swipperAnimation() {
	var swiper = new Swiper(".mySwiper", {
		slidesPerView: "auto",
		centeredSlides: false,
		spaceBetween: 50,
	});
}

swipperAnimation();
