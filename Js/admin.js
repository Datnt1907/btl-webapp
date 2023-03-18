//-------------------------------- Show nội dung: ------------------------------------------
document.getElementById("click1").onclick = function () {
    document.getElementById("content-home").style.display = 'block';
	document.getElementById("content-product").style.display = 'none';
	document.getElementById("content-list").style.display = 'none';
	document.getElementById("content-customer").style.display = 'none';
	document.getElementById("content-comment").style.display = 'none';
	document.getElementById("content-account").style.display = 'none';
};

document.getElementById("click2").onclick = function () {
    document.getElementById("content-product").style.display = 'block';
	document.getElementById("content-home").style.display = 'none';
	document.getElementById("content-list").style.display = 'none';
	document.getElementById("content-customer").style.display = 'none';
	document.getElementById("content-comment").style.display = 'none';
	document.getElementById("content-account").style.display = 'none';
};
document.getElementById("click3").onclick = function () {
    document.getElementById("content-list").style.display = 'block';
	document.getElementById("content-home").style.display = 'none';
	document.getElementById("content-product").style.display = 'none';
	document.getElementById("content-customer").style.display = 'none';
	document.getElementById("content-comment").style.display = 'none';
	document.getElementById("content-account").style.display = 'none';
};
document.getElementById("click4").onclick = function () {
    document.getElementById("content-customer").style.display = 'block';
	document.getElementById("content-home").style.display = 'none';
	document.getElementById("content-product").style.display = 'none';
	document.getElementById("content-list").style.display = 'none';
	document.getElementById("content-comment").style.display = 'none';
	document.getElementById("content-account").style.display = 'none';
};
document.getElementById("click5").onclick = function () {
    document.getElementById("content-comment").style.display = 'block';
	document.getElementById("content-home").style.display = 'none';
	document.getElementById("content-product").style.display = 'none';
	document.getElementById("content-list").style.display = 'none';
	document.getElementById("content-customer").style.display = 'none';
	document.getElementById("content-account").style.display = 'none';
};
document.getElementById("click6").onclick = function () {
    document.getElementById("content-account").style.display = 'block';
	document.getElementById("content-home").style.display = 'none';
	document.getElementById("content-product").style.display = 'none';
	document.getElementById("content-list").style.display = 'none';
	document.getElementById("content-customer").style.display = 'none';
	document.getElementById("content-comment").style.display = 'none';
};



/* ---------------------------Gán tên admin*/
function getName() { //lấy tên admin
	var dataName = sessionStorage.getItem("nameAdmin");
	
	//querySelector: tìm ra thẻ chứa tên cần tìm
	//innerHTML: lấy ra nội dung bên trong
	var N = document.querySelector("#content-home h1 a").innerHTML = dataName;  

}

/*---------------------------------    click hiện danh sách------*/
document.getElementById("list").onclick = function () {
	document.getElementById("content-product").style.display = 'none';
	document.getElementById("content-list").style.display = 'block';
};

/*---------------------------------    click nhập thêm sản phẩm ------*/
document.getElementById("enter-more").onclick = function () {
	document.getElementById("content-list").style.display = 'none';
	document.getElementById("content-product").style.display = 'block';
};

/* Thêm sản phẩm*/
document.getElementById("add-new").onclick = function() {
	var id = document.querySelector(".content1 #text-id").value;
	var name = document.querySelector(".content1 #text-name").value;
	var idName = { //biến gán mã và tên
		"Ma": id,
		"Ten": name,
	}
	var listIdName = sessionStorage.getItem("listIdName"); //tạo biến lưu trữ
	var allInfoIdName = ""; //mới
	if(listIdName != null ) {
		allInfoIdName = listIdName + "," + JSON.stringify(idName);
	}
	else {
		allInfoIdName = JSON.stringify(idName);
	}
	sessionStorage.setItem("listIdName", allInfoIdName);
	
	alert("Thêm sản phẩm thành công!");
	location.reload();
};

//Tạo bảng khi thêm sản phẩm
$(document).ready(function(){
	var SP = sessionStorage.getItem("listIdName"); 
	var order = "["+SP+"]"; //tạo biến để đếm số lượng 
	
	var data = JSON.parse(order);

	var content = "";
	content += 	`
					<table>
						<tr>
							<th> </th>
							<th>Mã loại</th>
							<th>Tên loại</th>
							<th>Công cụ</th>
						</tr>
				`;
	for(var i=0; i<data.length ; i++) { 
		//lấy dữ liệu hàng bên trong bảng
		var dataRow = 	`     					
							<tr>
								<td><input type="checkbox" class="select" name=""/></td>
								<td>${data[i].Ma}</td>
								<td>${data[i].Ten}</td>
								<td><input type="button" id="delete" value="Xóa"/></td>
							</tr>
						`;
		content += dataRow;
	}
	content += 	`</table>`;
	
	$("#list-product").html(content);
});


//Chọn tất cả 
document.getElementById("select-all").onclick = function() {
	var N = document.getElementsByClassName("select");
	for(var i=0; i<N.length; i++) { //duyệt qua các phần tử
		N[i].checked = true;		
	}
}


//Bỏ chọn tất cả 
document.getElementById("remove-select-all").onclick = function() {
	var N = document.getElementsByClassName("select");
	for(var i=0; i<N.length; i++) {
		N[i].checked = false;	
	}
}

//Xóa từng hàng
$(document).on("click","#delete",function(){
	$(this).parent().parent().remove();
});


//Xóa tất cả mục đã chọn
$(document).on("click","#delete-all",function(){
	var N = document.getElementsByClassName("select");
	for(var i=N.length; i>0; i--) {
	
		if(N[i-1].checked == true) {	
			$(N[i-1]).parent().parent().remove();
		}	
	}
});
//$(N[i-1]).parent().parent().remove();		