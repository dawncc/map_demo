$(document).bind("mobileinit", function(){   
	// $.mobile.ajaxEnabled = false;
	// $.mobile.linkBindingEnabled = false;
	$.mobile.defaultPageTransition = "slide";         
		// $.mobile.autoInitialize=false; //删除这行配置参数就会出现渲染错误 
		// $.mobile.page.prototype.options.addBackBtn= true ;
		// $.mobile.page.prototype.options.backBtnText = "后退";
		// $.mobile.hashListeningEnabled=false; //取消记录hash变化
		$.mobile.activeBtnClass="ui-btn-hover-a";
		$.mobile.page.prototype.options.domCache = true; 
		$.mobile.buttonMarkup.hoverDelay = 0;
		// $.mobile.loadingMessage = '正在加载..';
		// $.mobile.pageLoadErrorMessage = '页面载入失败'
		// $.mobile.showPageLoadingMsg();
		//  $(document).on("mobileinit", function () {

			$.mobile.loader.prototype.options.text = "正在加载...";
			$.mobile.loader.prototype.options.textVisible = true;
			$.mobile.loader.prototype.options.theme = "a";
			$.mobile.loader.prototype.options.html = "";

        //Thanks: https://github.com/jquery/jquery-mobile/issues/3414 
        $.mobile.loader.prototype.defaultHtml = "<div class='ui-loader' data-overlay-theme='a' class='ui-content' style='opacity: 0.5;'>" +
        "<span class='ui-icon ui-icon-loading'></span>" +
        "<h1></h1>" +
        "<div class='ui-loader-curtain'></div>" +
        "</div>";
    });  