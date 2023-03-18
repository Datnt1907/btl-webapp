//-------------------------------- Show phân khúc của sản phẩm: ------------------------------------------
document.getElementById("click-segment1").onclick = function () {
    document.getElementById("show-segment1").style.display = 'block';
	document.getElementById("show-segment2").style.display = 'none';
	document.getElementById("show-segment3").style.display = 'none';
	document.getElementById("show-segment4").style.display = 'none';
	document.getElementById("show-segment5").style.display = 'none';
	document.getElementById("show-segment6").style.display = 'none';
	
};
document.getElementById("click-segment2").onclick = function () {   // Phân khúc 2
    document.getElementById("show-segment2").style.display = 'block';
	document.getElementById("show-segment2").style.zIndex = '20';
	document.getElementById("show-segment1").style.display = 'none';
	document.getElementById("show-segment3").style.display = 'none';
	document.getElementById("show-segment4").style.display = 'none';
	document.getElementById("show-segment5").style.display = 'none';
	document.getElementById("show-segment6").style.display = 'none';
};
document.getElementById("click-segment3").onclick = function () {	// Phân khúc 3
    document.getElementById("show-segment3").style.display = 'block';
	document.getElementById("show-segment3").style.zIndex = '30';
	document.getElementById("show-segment1").style.display = 'none';
	document.getElementById("show-segment2").style.display = 'none';
	document.getElementById("show-segment4").style.display = 'none';
	document.getElementById("show-segment5").style.display = 'none';
	document.getElementById("show-segment6").style.display = 'none';
};
document.getElementById("click-segment4").onclick = function () {	// Phân khúc 4
    document.getElementById("show-segment4").style.display = 'block';
	document.getElementById("show-segment4").style.zIndex = '40';
	document.getElementById("show-segment1").style.display = 'none';
	document.getElementById("show-segment2").style.display = 'none';
	document.getElementById("show-segment3").style.display = 'none';
	document.getElementById("show-segment5").style.display = 'none';
	document.getElementById("show-segment6").style.display = 'none';
};
document.getElementById("click-segment5").onclick = function () {	// Phân khúc 5
    document.getElementById("show-segment5").style.display = 'block';
	document.getElementById("show-segment5").style.zIndex = '50';
	document.getElementById("show-segment1").style.display = 'none';
	document.getElementById("show-segment2").style.display = 'none';
	document.getElementById("show-segment3").style.display = 'none';
	document.getElementById("show-segment4").style.display = 'none';
	document.getElementById("show-segment6").style.display = 'none';
};
document.getElementById("click-segment6").onclick = function () {	// Phân khúc 6
    document.getElementById("show-segment6").style.display = 'block';
	document.getElementById("show-segment6").style.zIndex = '60';
	document.getElementById("show-segment1").style.display = 'none';
	document.getElementById("show-segment2").style.display = 'none';
	document.getElementById("show-segment3").style.display = 'none';
	document.getElementById("show-segment4").style.display = 'none';
	document.getElementById("show-segment5").style.display = 'none';
};


//---------------------------------------------		 Hiển thị nội dung xem thêm - thu gọn: ------------------------------------
document.getElementById("show").onclick = function () {
    document.getElementById("more-info-display").style.display = 'block';
	document.getElementById("content2").style.height = '4360px';
	document.getElementById("show").style.display = 'none';
};

document.getElementById("collapse").onclick = function () {
    document.getElementById("more-info-display").style.display = 'none';
	document.getElementById("content2").style.height = '1000px';
	document.getElementById("show").style.display = 'block';
};
