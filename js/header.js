
$(function(){
	document.write('<div class="navbarWrap navbar bg-theme mt10">');
	/*===== navbar-header start ======*/
	document.write('<div class="navbar-header">');
	document.write('<a href="javascript:void(0);" class="navbar-toggle iconfont icon-caidan" data-toggle="collapse" data-target=".navbar-collapse"></a>');
	document.write('<a href="javascript:void(0);" class="navbar-brand">导航</a>');
	document.write('</div>');
	/*===== navbar-header end ======*/
	/*===== ul navbar-nav start ======*/
	document.write('<ul class="navbar-nav folding">');
	document.write('<li>');
	document.write('<a href="index.html">首页</a>');
	document.write('</li>');
	/*=== 组件下拉 start ===*/
	document.write('<li class="dropdown">');
	document.write('<a href="javascript:void(0);">组件 <span class="iconfont icon-h5icondown"></span></a>');	
	document.write('<ul class="dropdown-menu">');
	document.write('<li><a href="shange.html">栅格</a></li>');
	document.write('<li><a href="navbar.html">折叠式导航</a></li>');
	document.write('<li><a href="button.html">按钮组</a></li>');
	document.write('<li><a href="form.html">表单</a></li>');
	document.write('<li><a href="tab.html">标签页</a></li>');
	document.write('<li><a href="roadTab.html">网页基本</a></li>');
	document.write('<li><a href="card.html">卡片</a></li>');
	document.write('</ul>');	
	document.write('</li>');
	/*=== 组件下拉 end ===*/
	document.write('<li class="dropdown">');
	document.write('<a href="javascript:void(0);">插件 <span class="iconfont icon-h5icondown"></span></a>');
	document.write('<ul class="dropdown-menu">');
	document.write('<li><a href="imageSlide.html">图片轮播</a></li>');
	document.write('<li><a href="select.html">下拉列表（联动）</a></li>');
	document.write('<li><a href="chart.html">统计图</a></li>');
	document.write('</ul>');
	document.write('</li>');

	document.write('<li><a href="">目录</a></li>');
	document.write('<li><a href="">附件</a></li>');
	document.write('</ul>');
	document.write('</div>');
});