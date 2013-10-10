 (function($){
  //�����ⲿ�ӿ�
  $.fn.map = function(options){
    var defaults = {
      point_x: "118.768692",
      point_y: "32.066374",
       //��ע������
       title:"�ҵı��",
       content:"�ҵı�ע",
       markerArr: [{isOpen:0,icon:{w:21,h:22,l:42,t:0,x:6,lb:5}}],

     };

     var options = $.extend(defaults, options);

     var map;

     function initMap(options){
        showLoader();
        createMap(options);//������ͼ
        setMapEvent();//���õ�ͼ�¼�
        addMapControl();//���ͼ��ӿؼ�
        addMarker(options);//���ͼ�����marker
        titlesLoaded();
      }

    //������ͼ������
    function createMap(options){
        map = new BMap.Map("map-div");//�ڰٶȵ�ͼ�����д���һ����ͼ
        var point = new BMap.Point(options.point_x, options.point_y);//����һ�����ĵ�����
        map.centerAndZoom(point,15);//�趨��ͼ�����ĵ�����겢����ͼ��ʾ�ڵ�ͼ������
      }

    //��ͼ�¼����ú�����
    function setMapEvent(){
        map.enableDragging();//���õ�ͼ��ק�¼���Ĭ������(�ɲ�д)
        map.enableScrollWheelZoom();//���õ�ͼ���ַŴ���С
        map.enableDoubleClickZoom();//�������˫���Ŵ�Ĭ������(�ɲ�д)
        map.enableKeyboard();//���ü����������Ҽ��ƶ���ͼ
      }

    //��ͼ�ؼ���Ӻ�����
    function addMapControl(){
        //���ͼ��������ſؼ�
        var ctrl_nav = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_LEFT,type:BMAP_NAVIGATION_CONTROL_LARGE });
        map.addControl(ctrl_nav);
        //���ͼ���������ͼ�ؼ�
        var ctrl_ove = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:1});
        map.addControl(ctrl_ove);
        //���ͼ����ӱ����߿ؼ�
        var ctrl_sca = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
        map.addControl(ctrl_sca);
      }


    //����marker
    function addMarker(options){
      for(var i=0;i<options.markerArr.length;i++){
        var json = options.markerArr[i];
        var point = new BMap.Point(options.point_x,options.point_y);
        var iconImg = createIcon(json.icon);
        var marker = new BMap.Marker(point,{icon:iconImg});
        var iw = createInfoWindow(i);
        var label = new BMap.Label(options.title,{"offset":new BMap.Size(json.icon.lb-json.icon.x+10,-20)});
        marker.setLabel(label);
        map.addOverlay(marker);
        label.setStyle({
          font: "14px bolder",
          color:"#CC3333",
          border: "1px solid #999999",
          "border-radius": "4px",
          "box-shadow": "2px 2px rgba(0,0,0,.6)",
          padding:"2px",
          margin: "10px",
          cursor:"pointer",
        });

        (function(){
          var index = i;
          var _iw = createInfoWindow(i);
          var _marker = marker;
          _marker.addEventListener("click",function(){
            this.openInfoWindow(_iw);
          });
          _iw.addEventListener("open",function(){
            _marker.getLabel().hide();
          })
          _iw.addEventListener("close",function(){
            _marker.getLabel().show();
          })
          label.addEventListener("click",function(){
            _marker.openInfoWindow(_iw);
          })
          if(!!json.isOpen){
            label.hide();
            _marker.openInfoWindow(_iw);
          }
        })()
      }
    }
    //����InfoWindow
    function createInfoWindow(i){
      var json = options.markerArr[i];
      var iw = new BMap.InfoWindow("<b class='iw_poi_title' title='" + options.title + "'>" + options.title + "</b><div class='iw_poi_content'>"+options.content+"</div>");
      return iw;
    }
    //����һ��Icon
    function createIcon(json){
      var icon = new BMap.Icon("http://app.baidu.com/map/images/us_mk_icon.png", new BMap.Size(json.w,json.h),{imageOffset: new BMap.Size(-json.l,-json.t),infoWindowOffset:new BMap.Size(json.lb+5,1),offset:new BMap.Size(json.x,json.h)})
      return icon;
    }

    //����loading
    function showLoader(){
      $.mobile.loading("show");
    }

    //ͼ��������
    function titlesLoaded(){
      map.addEventListener("tilesloaded",function(){
        $.mobile.loading("hide");
        console.log("��ͼ�������");});
    }
    initMap(options);
  };
})(jQuery);
