window.onload = function () {
	setTimeout(function () {
		window.scrollTo(0, 0);
	}, 100);
};

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

// menu

var menu = document.querySelector(".menu h5");
var menu2 = document.querySelector(".menu");
var menuscr = document.querySelector(".menu-scr");
var navimg = document.querySelector("nav img");
var flag = 0;

menu.addEventListener("click", function () {
	if (flag == 0) {
		menuscr.style.top = 0;
		navimg.style.opacity = 0;
		menu2.style.position = "fixed";
		menu2.style.padding = "0vw 68vw";
		flag = 1;
	} else {
		menuscr.style.top = "-105%";
		navimg.style.opacity = 1;
		menu2.style.padding = "0vw 0vw";
		menu2.style.position = "relative";
		flag = 0;
	}
});
