//-------------------------------- Show vị trí cửa hàng: ------------------------------------------
document.getElementById("address-1").onclick = function () {
    document.getElementById("map1").style.display = 'block';
	document.getElementById("map2").style.display = 'none';
	document.getElementById("map3").style.display = 'none';
	document.getElementById("map4").style.display = 'none';
	document.getElementById("map5").style.display = 'none';
	document.getElementById("map6").style.display = 'none';	
};
document.getElementById("address-2").onclick = function () {
    document.getElementById("map2").style.display = 'block';
	document.getElementById("map2").style.zIndex = '20';
	document.getElementById("map1").style.display = 'none';
	document.getElementById("map3").style.display = 'none';
	document.getElementById("map4").style.display = 'none';
	document.getElementById("map5").style.display = 'none';
	document.getElementById("map6").style.display = 'none';
};
document.getElementById("address-3").onclick = function () {
    document.getElementById("map3").style.display = 'block';
	document.getElementById("map3").style.zIndex = '30';
	document.getElementById("map1").style.display = 'none';
	document.getElementById("map2").style.display = 'none';
	document.getElementById("map4").style.display = 'none';
	document.getElementById("map5").style.display = 'none';
	document.getElementById("map6").style.display = 'none';
};
document.getElementById("address-4").onclick = function () {
    document.getElementById("map4").style.display = 'block';
	document.getElementById("map4").style.zIndex = '40';
	document.getElementById("map1").style.display = 'none';
	document.getElementById("map2").style.display = 'none';
	document.getElementById("map3").style.display = 'none';
	document.getElementById("map5").style.display = 'none';
	document.getElementById("map6").style.display = 'none';
};
document.getElementById("address-5").onclick = function () {
    document.getElementById("map5").style.display = 'block';
	document.getElementById("map5").style.zIndex = '50';
	document.getElementById("map1").style.display = 'none';
	document.getElementById("map2").style.display = 'none';
	document.getElementById("map3").style.display = 'none';
	document.getElementById("map4").style.display = 'none';
	document.getElementById("map6").style.display = 'none';
};
document.getElementById("address-6").onclick = function () {
    document.getElementById("map6").style.display = 'block';
	document.getElementById("map6").style.zIndex = '60';
	document.getElementById("map1").style.display = 'none';
	document.getElementById("map2").style.display = 'none';
	document.getElementById("map3").style.display = 'none';
	document.getElementById("map4").style.display = 'none';
	document.getElementById("map5").style.display = 'none';
};