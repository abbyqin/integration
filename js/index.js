$(function() {
	var isClick = false; //判断是否有open
	loadMenu(); // 加载菜单	

	// tabs
	$('.tabs-item a').on("click", function() {
		var $this = $(this);
		var panel = $this.attr("data-role");
		$(".tabs-item").removeClass('active');
		$this.parents(".tabs-item").addClass('active');
		$(".tab-pane").removeClass("active");
		$("#" + panel).addClass('active');
	});
})

// 加载菜单
function loadMenu() {
	$(".navbarWrap").remove();
	$.ajax({
		url: "menu.html",
		type: "GET",
		success: function(data) {
			$(".menu").append(data);
			// 小屏幕---展开菜单
			$(".navbar-toggle").click(function() {
				$(".folding").toggle(500,function(){
					var display = $(".folding").css("display");
					if(display=="none"){
						$("#header").removeClass('headerHeight');
					}else{
						$("#header").addClass('headerHeight');
					}
				});				
			})

			// 导航----点击打开二级菜单	
			$(".menu").find(".dropdown").click(function() {
				$this = $(this);
				if (!$this.hasClass("open")) {
					isClick = true;
				} else {
					isClick = false;
				};
				if (isClick) {
					$(".dropdown").removeClass("open");
					$this.addClass("open");
				} else {
					$this.removeClass("open");
				}
			});

			// 点击div以外的其他地方隐藏div
			$(document).bind("click", function(e) {
				var target = $(e.target);
				if (target.closest(".dropdown").length == 0) {
					$(".dropdown").removeClass("open");
				}
			});
		}
	});
}
// 图片懒加载
// 当网页的滚动条滚动时要时时判断当前li的位置！
window.onscroll = function() {
	var oDiv = document.getElementById('imgwrap');
	var oUl = oDiv.children[0];
	var aLi = oUl.children;
	var len = aLi.length;
	for (var i = 0; i < len; i++) {
		var oLi = aLi[i];
		console.log(oLi.offsetTop);
		//检查oLi是否在可视区域
		var t = document.documentElement.clientHeight + (document.documentElement.scrollTop || document.body.scrollTop);
		var h = getHeight(oLi);
		// console.log("h : " +h + " , t : " + t);
		if (h < t) {
			setTimeout("setImg(" + i + ")", 500);
		}
	}
};
// 设置图片
function setImg(index) {
	var imgwrap = document.getElementById("imgwrap");
	var imgUl = imgwrap.children[0];
	var imgLi = imgUl.children;
	if (imgLi[index].dataset) {
		var src = imgLi[index].dataset.src;	
	} else {
		var src = imgLi[index].getAttribute('data-src');	
	}
	var oImg = document.createElement('img');
	oImg.src = src;
	if (imgLi[index].children.length == 0) {
		imgLi[index].appendChild(oImg);
	}

}
// 可是区域时加载图片
function getHeight(obj) {
	var h = 0;
	while (obj) {
		h += obj.offsetTop;
		obj = obj.offsetParent;
	}
	return h;
}
