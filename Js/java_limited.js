
document.getElementById("chonduoi1trieu").onclick = function () {
	if (this.checked){
		var i;
		var tatca = document.getElementsByClassName("sp-item-limited");
		for (i = 0; i < tatca.length; i++) {
			tatca[i].style.display = "none";
		}
		
		var tatca1 = document.getElementsByClassName("duoi1trieu");
		for (i = 0; i < tatca1.length; i++) {
			tatca1[i].style.display = "block";
		}		
		document.getElementById("chontu1-5trieu").checked = false;
		document.getElementById("chontu5-10trieu").checked = false;
		document.getElementById("chontren10trieu").checked = false;		
	}
	else{  
		var i;
		var tatca = document.getElementsByClassName("sp-item-limited");
		for (i = 0; i < tatca.length; i++) {
			tatca[i].style.display = "block";
		}
    }
};


document.getElementById("chontu1-5trieu").onclick = function () {
	if (this.checked){
		var i;
		var tatca = document.getElementsByClassName("sp-item-limited");
		for (i = 0; i < tatca.length; i++) {
			tatca[i].style.display = "none";
		}
		
		var tatca1 = document.getElementsByClassName("tu1-5trieu");
		for (i = 0; i < tatca1.length; i++) {
			tatca1[i].style.display = "block";
		}
		document.getElementById("chonduoi1trieu").checked = false;
		document.getElementById("chontu5-10trieu").checked = false;
		document.getElementById("chontren10trieu").checked = false;
	}
	else{  
		var i;
		var tatca = document.getElementsByClassName("sp-item-limited");
		for (i = 0; i < tatca.length; i++) {
			tatca[i].style.display = "block";
		}
    }
};


document.getElementById("chontu5-10trieu").onclick = function () {
	if (this.checked){
		var i;
		var tatca = document.getElementsByClassName("sp-item-limited");
		for (i = 0; i < tatca.length; i++) {
			tatca[i].style.display = "none";
		}
		
		var tatca1 = document.getElementsByClassName("tu5-10trieu");
		for (i = 0; i < tatca1.length; i++) {
			tatca1[i].style.display = "block";
		}
		document.getElementById("chonduoi1trieu").checked = false;
		document.getElementById("chontu1-5trieu").checked = false;
		document.getElementById("chontren10trieu").checked = false;
	}
	else{  
		var i;
		var tatca = document.getElementsByClassName("sp-item-limited");
		for (i = 0; i < tatca.length; i++) {
			tatca[i].style.display = "block";
		}
    }
};


document.getElementById("chontren10trieu").onclick = function () {
	if (this.checked){
		var i;
		var tatca = document.getElementsByClassName("sp-item-limited");
		for (i = 0; i < tatca.length; i++) {
			tatca[i].style.display = "none";
		}
		
		var tatca1 = document.getElementsByClassName("tren10trieu");
		for (i = 0; i < tatca1.length; i++) {
			tatca1[i].style.display = "block";
		}
		document.getElementById("chonduoi1trieu").checked = false;
		document.getElementById("chontu1-5trieu").checked = false;
		document.getElementById("chontu5-10trieu").checked = false;
	}
	else{  
		var i;
		var tatca = document.getElementsByClassName("sp-item-limited");
		for (i = 0; i < tatca.length; i++) {
			tatca[i].style.display = "block";
		}
    }
};