/* a href='#' 클릭 무시 */
$('a[href="#"]').click(function (ignore) {
	ignore.preventDefault();
});

/* header_스크롤이 되면 헤더 배경색이 들어감*/
$(window).scroll(function () {
	if ($(window).scrollTop() >= 400) {
		$("header").addClass("scroll");
	} else {
		$("header").removeClass("scroll");
	}
});

/* 햄버거 버튼 누르면 전체 메뉴 보이기 */
$("a.ham").click(function () {
	posY = $(window).scrollTop();
	$(this).toggleClass("active");
	$("ul.gnb").toggleClass("active");
	$("header").toggleClass("active");
	if ($("header").hasClass("active")) {
		$("header").on("scroll touchmove mousewheel", function (event) {
			event.preventDefault();
			event.stopPropagation();
			return false;
		});
	} else {
		$("header").off("scroll touchmove mousewheel");
	}
	$("body").toggleClass("scrollBar");
});
