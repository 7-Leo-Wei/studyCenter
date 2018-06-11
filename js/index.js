var bannerList = document.getElementById('bannerList');
var chsCclDiv = document.getElementById('chsCclDiv');
var liList = bannerList.getElementsByTagName('LI');
var circleSpan = chsCclDiv.getElementsByTagName('span');
// banner动态效果
function bannerMove(){
	// 添加中下部banner选择按钮
	var cclFrag = document.createDocumentFragment();
	for (var i = 0; i < liList.length; i++) {
		var cclSpan = document.createElement('span');
		cclSpan.className = 'circle';
		cclFrag.appendChild(cclSpan);
	}
	chsCclDiv.appendChild(cclFrag);
	circleSpan[0].className = 'circle crtCcl';
	// 添加banner图片
	var frag = document.createDocumentFragment();
	for (var i = 0; i < liList.length; i++) {
		var clnLi = liList[i].cloneNode(true);
		frag.appendChild(clnLi);
	}
	bannerList.appendChild(frag);

	// 设置动态效果
	var chgTop = 0;
	var spanNum = 0;
	setInterval(function(){
		var picChg = setInterval(function(){
			chgTop -=2;
			bannerList.style.top = chgTop+'px';
			if (chgTop%300 == 0) {
				clearInterval(picChg);
			}
			if (chgTop == -liList.length/2*300) {
				chgTop = 0;
			}
		},3);	
		spanNum = parseInt(-(chgTop-300)/300);
		for (var i = 0; i < circleSpan.length; i++) {
			circleSpan[i].className = 'circle';
		}
		if (spanNum > 3) {
			spanNum = 0;
		};
		circleSpan[spanNum].className = 'circle crtCcl';
	},3000);
	
	// 设置选择按钮点击效果
	chsCclDiv.onclick = function () {
		var evt = evt || window.event;
		var obj = evt.target || evt.srcElement;
		var index;
		if (obj.nodeName.toLowerCase() == 'span') {
			for (var i = 0; i < circleSpan.length; i++) {
				if (circleSpan[i] == obj) {
					index = i;
				}
			}
		}
		chgTop = -index*300;
		bannerList.style.top = chgTop+'px';
		for (var i = 0; i < circleSpan.length; i++) {
			circleSpan[i].className = 'circle';
		}
		circleSpan[index].className = 'circle crtCcl';
	}
}



window.onload = function () {
	bannerMove();
}