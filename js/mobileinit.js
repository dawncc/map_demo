$(document).bind("mobileinit", function(){   
	// $.mobile.ajaxEnabled = false;
	// $.mobile.linkBindingEnabled = false;
	$.mobile.defaultPageTransition = "slide";         
		// $.mobile.autoInitialize=false; //ɾ���������ò����ͻ������Ⱦ���� 
		// $.mobile.page.prototype.options.addBackBtn= true ;
		// $.mobile.page.prototype.options.backBtnText = "����";
		// $.mobile.hashListeningEnabled=false; //ȡ����¼hash�仯
		$.mobile.activeBtnClass="ui-btn-hover-a";
		$.mobile.page.prototype.options.domCache = true; 
		$.mobile.buttonMarkup.hoverDelay = 0;
		// $.mobile.loadingMessage = '���ڼ���..';
		// $.mobile.pageLoadErrorMessage = 'ҳ������ʧ��'
		// $.mobile.showPageLoadingMsg();
		//  $(document).on("mobileinit", function () {

			$.mobile.loader.prototype.options.text = "���ڼ���...";
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