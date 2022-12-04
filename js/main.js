/* swiper 적용 */
var swiper = new Swiper(".mySwiper", {
	slidesPerView: "auto",
	freeMode: true,
	spaceBetween: 25,
});

/* 스크롤 위치에따라 위치 움직이기 */
$(window).scroll(function () {
	let scrollTop = $(window).scrollTop();
	$("#space h2").css({ transform: `translateX(${3091 - scrollTop}px)` });
	if ($(window).width() <= 1200) {
		$("#space h2").css({ transform: `translateX(${2383 - scrollTop}px)` });
	}
	if ($(window).width() <= 1024) {
		$("#space h2").css({ transform: `translateX(${1142 - scrollTop}px)` });
	}
});
