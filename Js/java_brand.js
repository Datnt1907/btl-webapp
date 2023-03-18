//Chọn dòng 1: dưới 1 triệu
document.getElementById("choose-1").onclick = function () {
	if (this.checked) { //nếu ô đã đc tích
		var i;
		var a = document.getElementsByClassName("G-product"); // a -> all
		for(i=0; i<a.length; i++) {
			a[i].style.display = "none";
		}
		
		var less1 = document.getElementsByClassName("less-than-1") 		// dưới 1 triệu 
		for(i=0; i<less1.length; i++) {
			less1[i].style.display = "block";
		} 
		document.getElementById("choose-2").checked = false;
		document.getElementById("choose-3").checked = false;
		document.getElementById("choose-4").checked = false;
		document.getElementById("choose-5").checked = false;
		document.getElementById("choose-6").checked = false;
		document.getElementById("choose-7").checked = false;
	} 
	else {
		var i;
		var a = document.getElementsByClassName("G-product"); // a -> all
		for(i=0; i<a.length; i++) {
			a[i].style.display = "block";
		}
	}		
};
//Chọn dòng 2: từ 1 đến 3 triệu
document.getElementById("choose-2").onclick = function () {
	if (this.checked) { //nếu ô đã đc tích
		var i;
		var a = document.getElementsByClassName("G-product"); // a -> all
		for(i=0; i<a.length; i++) {
			a[i].style.display = "none";
		}
		document.getElementById("choose-1").checked = false;
		document.getElementById("choose-3").checked = false;
		document.getElementById("choose-4").checked = false;
		document.getElementById("choose-5").checked = false;
		document.getElementById("choose-6").checked = false;
		document.getElementById("choose-7").checked = false;
		
		var from1To3 = document.getElementsByClassName("from-1-to-3") 		// từ 1 đến 3 triệu
		for(i=0; i<from1To3.length; i++) {
			from1To3[i].style.display = "block";
		} 
	} 
	else {
		var i;
		var a = document.getElementsByClassName("G-product"); // a -> all
		for(i=0; i<a.length; i++) {
			a[i].style.display = "block";
		}
	}		
};
//Chọn dòng 3: từ 3 đến 5 triệu
document.getElementById("choose-3").onclick = function () {
	if (this.checked) { //nếu ô đã đc tích
		var i;
		var a = document.getElementsByClassName("G-product"); // a -> all
		for(i=0; i<a.length; i++) {
			a[i].style.display = "none";
		}
		
		var from3To5 = document.getElementsByClassName("from-3-to-5") 		// từ 3 đến 5 triệu
		for(i=0; i<from3To5.length; i++) {
			from3To5[i].style.display = "block";
		} 
		document.getElementById("choose-1").checked = false;
		document.getElementById("choose-2").checked = false;
		document.getElementById("choose-4").checked = false;
		document.getElementById("choose-5").checked = false;
		document.getElementById("choose-6").checked = false;
		document.getElementById("choose-7").checked = false;
	} 
	else {
		var i;
		var a = document.getElementsByClassName("G-product"); // a -> all
		for(i=0; i<a.length; i++) {
			a[i].style.display = "block";
		}
	}		
};
//Chọn dòng 4: từ 5 đến 7 triệu
document.getElementById("choose-4").onclick = function () {
	if (this.checked) { //nếu ô đã đc tích
		var i;
		var a = document.getElementsByClassName("G-product"); // a -> all
		for(i=0; i<a.length; i++) {
			a[i].style.display = "none";
		}
		
		var from5To7 = document.getElementsByClassName("from-5-to-7") 		// từ 5 đến 7 triệu
		for(i=0; i<from5To7.length; i++) {
			from5To7[i].style.display = "block";
		} 
		document.getElementById("choose-1").checked = false;
		document.getElementById("choose-2").checked = false;
		document.getElementById("choose-3").checked = false;
		document.getElementById("choose-5").checked = false;
		document.getElementById("choose-6").checked = false;
		document.getElementById("choose-7").checked = false;
	} 
	else {
		var i;
		var a = document.getElementsByClassName("G-product"); // a -> all
		for(i=0; i<a.length; i++) {
			a[i].style.display = "block";
		}
	}		
};
//Chọn dòng 5: từ 7 đến 10 triệu
document.getElementById("choose-5").onclick = function () {
	if (this.checked) { //nếu ô đã đc tích
		var i;
		var a = document.getElementsByClassName("G-product"); // a -> all
		for(i=0; i<a.length; i++) {
			a[i].style.display = "none";
		}
		
		var from7To10 = document.getElementsByClassName("from-7-to-10") 		// từ 7 đến 10 triệu
		for(i=0; i<from7To10.length; i++) {
			from7To10[i].style.display = "block";
		} 
		document.getElementById("choose-1").checked = false;
		document.getElementById("choose-2").checked = false;
		document.getElementById("choose-3").checked = false;
		document.getElementById("choose-4").checked = false;
		document.getElementById("choose-6").checked = false;
		document.getElementById("choose-7").checked = false;
	} 
	else {
		var i;
		var a = document.getElementsByClassName("G-product"); // a -> all
		for(i=0; i<a.length; i++) {
			a[i].style.display = "block";
		}
	}		
};
//Chọn dòng 6: từ 10 đến 15 triệu
document.getElementById("choose-6").onclick = function () {
	if (this.checked) { //nếu ô đã đc tích
		var i;
		var a = document.getElementsByClassName("G-product"); // a -> all
		for(i=0; i<a.length; i++) {
			a[i].style.display = "none";
		}
		
		var from10To15 = document.getElementsByClassName("from-10-to-15") 		// từ 10 đến 15 triệu
		for(i=0; i<from10To15.length; i++) {
			from10To15[i].style.display = "block";
		} 
		document.getElementById("choose-1").checked = false;
		document.getElementById("choose-2").checked = false;
		document.getElementById("choose-3").checked = false;
		document.getElementById("choose-4").checked = false;
		document.getElementById("choose-5").checked = false;
		document.getElementById("choose-7").checked = false;
	} 
	else {
		var i;
		var a = document.getElementsByClassName("G-product"); // a -> all
		for(i=0; i<a.length; i++) {
			a[i].style.display = "block";
		}
	}		
};
//Chọn dòng 7: trên 15 triệu
document.getElementById("choose-7").onclick = function () {
	if (this.checked) { //nếu ô đã đc tích
		var i;
		var a = document.getElementsByClassName("G-product"); // a -> all
		for(i=0; i<a.length; i++) {
			a[i].style.display = "none";
		}
		
		var over15 = document.getElementsByClassName("over-15") 		// trên 15 triệu
		for(i=0; i<over15.length; i++) {
			over15[i].style.display = "block";
		} 
		document.getElementById("choose-1").checked = false;
		document.getElementById("choose-2").checked = false;
		document.getElementById("choose-3").checked = false;
		document.getElementById("choose-4").checked = false;
		document.getElementById("choose-5").checked = false;
		document.getElementById("choose-6").checked = false;
	} 
	else {
		var i;
		var a = document.getElementsByClassName("G-product"); // a -> all
		for(i=0; i<a.length; i++) {
			a[i].style.display = "block";
		}
	}		
};







//-------------------------------------- Thêm sản phẩm vào giỏ hàng
$(document).ready(function(){
	var cart = sessionStorage.getItem("cart");
	var order = "["+cart+"]";
	var data = JSON.parse(order);
	$("#soluong").text(data.length);
					
	var content = "";
				
	$(".click-buy-now").click(function(){
		var soluong = Number(sessionStorage.getItem("soluong"));
		if (soluong!=null)
			soluong +=1;
		else
			soluong = 1;
							
		$("#soluong").text(soluong);
		sessionStorage.setItem("soluong",soluong);

		var Img = $(this).parent().find(".pic-product").attr("src");
		var Name = $(this).parent().find("#product-name").text();
		var Price = $(this).parent().find("#price").text();
						
		var sanpham = {
			"anh":Img,
			"ten":Name,
			"gia":Price,
		};
						
		var cart = sessionStorage.getItem("cart");
		var ds_sanpham = "";
					
		if(cart!=null){
			ds_sanpham = cart +","+JSON.stringify(sanpham);
		}
		else{
			ds_sanpham = JSON.stringify(sanpham);
		}
		sessionStorage.setItem("cart", ds_sanpham);	
						
		alert("Sản phẩm đã dược thêm vào giỏ hàng");
	});
});