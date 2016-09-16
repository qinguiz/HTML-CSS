// function addLoadEvent(func){
// 	var oldonload = window.onload;
// 	if (typeof window.onload != "function") {
// 		window.onload = func;
// 	}else{
// 		window.onload = function(){
// 			oldonload();
// 			func();
// 		}
// 	}
// }


window.onload = function(){
	var oUl = document.querySelector("#ul1");
	var aLi = oUl.querySelectorAll("li");
	var iH = aLi[0].offsetHeight;
	var iNow = 1;
	var timer;
	var num = 1;
	// alert(iH)

		timer = setInterval(function(){
			num = iH * iNow;
			animate(oUl,"top",20,-num);
			// console.log(iNow)
			iNow ++;
			if (iNow == 3) {
				iNow = 0;
			}
		},2000)

}


function getStyle(obj,attr){ return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr]; }


function animate ( obj, attr, dir, target, endFn ) {
	var iNow = 1;
	
	dir = parseInt(getStyle( obj, attr )) < target ? dir : -dir;
	
	clearInterval( obj.timer );
	
	obj.timer = setInterval(function () {
		
		var speed = parseInt(getStyle( obj, attr )) + dir;
		
		if ( speed > target && dir > 0 ||  speed < target && dir < 0  ) {
			speed = target;
		}
		
		obj.style[attr] = speed + 'px';
		
		if ( speed == target ) {
			clearInterval( obj.timer );
			endFn && endFn();
		}
		
	}, 30);

}
