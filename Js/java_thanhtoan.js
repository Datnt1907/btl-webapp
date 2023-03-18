//thông báo
document.getElementById("ThanhToan").onclick = function () {
	var check = document.getElementsByName("pt-giaohang");
	var tong = document.querySelector("#giacuoi").innerHTML
	
	for (var i = 0; i < check.length; i++){
		if (check[i].checked == true){
			alert("Bạn đã chọn "+check[i].value+ ". Tổng cộng: " + tong);
			alert("Thanh toán thành công");
			//sothe();	
		}
	}
}

//thay đổi thông tin
document.getElementById("thaydoi").onclick = function () {
	document.getElementById("thaydoi-thongtin").style.display = "block"
	document.getElementById("huythaydoi").style.display = "block"
	document.getElementById("dongy-thaydoi").style.display = "block"
	document.getElementById("thaydoi").style.display = "none"
}

document.getElementById("huythaydoi").onclick = function () {
	document.getElementById("thaydoi-thongtin").style.display = "none"
	document.getElementById("huythaydoi").style.display = "none"
	document.getElementById("dongy-thaydoi").style.display = "none"
	document.getElementById("thaydoi").style.display = "block"
}

document.getElementById("dongy-thaydoi").onclick = function () {
	var ten = document.getElementById("hoten_thaydoi").value;
	var diachi = document.getElementById("diachi_thaydoi").value;
	var sdt =  document.getElementById("sodienthoai_thaydoi").value;
	var dieukien = 0;
	if (ten == null || ten == ""){
		dieukien +=1;
		alert("Tên không được để trống");
	}
	else if (diachi == null || diachi == ""){
		dieukien +=1;
		alert("địa chỉ không được để trống");
	}
	else if (sdt == null || sdt == ""){
		dieukien +=1;
		alert("số điện thoại không được để trống");
	}
	else if (isNaN(sdt)){
		dieukien +=1;
		alert("số điện thoại không chứa ký tự");
	}
	if (dieukien == 0){
		document.querySelector("#hoten").innerHTML = document.getElementById("hoten_thaydoi").value;
		document.querySelector("#diachi").innerHTML = document.getElementById("diachi_thaydoi").value;
		document.querySelector("#sodienthoai").innerHTML = document.getElementById("sodienthoai_thaydoi").value;
		document.getElementById("hoten_thaydoi").value = "";
		document.getElementById("diachi_thaydoi").value = "";
		document.getElementById("sodienthoai_thaydoi").value = "";
		alert("Thay đổi thông tin thành công");
	}
}

var giabd = sessionStorage.getItem("giabandau");

//chuyển giá tiền sang
function auto() {

	$("#giabandau").text(ThanhTien(Number(giabd)) + " đ");
	$("#giaship").text(ThanhTien(100000) + " đ");
	$("#giacuoi").text(ThanhTien(Number(giabd)+100000) + " đ");
}

//checkbox chọn phương thức
document.getElementById("gh1").onclick = function(){
	if(this.checked)
	{
		$("#giabandau").text(ThanhTien(Number(giabd)) + " đ");
		$("#giaship").text(ThanhTien(100000) + " đ");
		$("#giacuoi").text(ThanhTien(Number(giabd)+100000) + " đ");
	}
}
document.getElementById("gh2").onclick = function(){
	if(this.checked)
	{
		$("#giabandau").text(ThanhTien(Number(giabd)) + " đ");
		$("#giaship").text(ThanhTien(50000) + " đ");
		$("#giacuoi").text(ThanhTien(Number(giabd)+50000) + " đ");
	}
}
document.getElementById("gh3").onclick = function(){
	if(this.checked)
	{
		$("#giabandau").text(ThanhTien(Number(giabd)) + " đ");
		$("#giaship").text(ThanhTien(150000) + " đ");
		$("#giacuoi").text(ThanhTien(Number(giabd)+150000) + " đ");
	}
}
document.getElementById("gh4").onclick = function(){
	if(this.checked)
	{
		$("#giabandau").text(ThanhTien(Number(giabd)) + " đ");
		$("#giaship").text(ThanhTien(200000) + " đ");
		$("#giacuoi").text(ThanhTien(Number(giabd)+200000) + " đ");
	}
}


//xóa phẩy trong chuỗi đơn giá
function getMoney(chuoi){
	var money = chuoi.replace(" đ","");
	money = money.replaceAll(",","");
	return money			
}
//thêm dấu phẩy trong chuỗi thành tiền
function ThanhTien(tien) {
  tien = tien.toString();

  var mang = tien.split('');
  mang = mang.reverse();
  var ketqua = [0];
  var dem = mang.length;

  if (dem > 3) {
    for (var i = 1; i < dem; i++) {
      if (i % 3 == 0) {
        ketqua += ','
      }
      ketqua += mang[i]
    }
    ketqua = ketqua.split('').reverse().join('');
  }
  else {
    ketqua += mang.join('');
  }
  return (ketqua)
}