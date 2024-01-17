// lenis for smmoth scrolling 

const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

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

var menu = document.querySelector(".menu h5");
var menu2 = document.querySelector(".menu");
var menuscr = document.querySelector(".menu-scr");
var navimg = document.querySelector("nav img");
var flag = 0;

menu.addEventListener("click", function () {
	if (flag == 0) {
		menuscr.style.top = 0;
		navimg.style.opacity = 0;
		menu2.style.position = "fixed"
		menu2.style.padding = "0vw 66vw"
		flag = 1;
	} else {
		menuscr.style.top = "-100%";
		navimg.style.opacity = 1;
		menu2.style.padding = "0vw 66vw"
		flag = 0;
	}
});
