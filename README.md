map_demo
============

调用百度地图
-----
  
    *  封装map.js,  根据坐标值实现地图定位
    *  自定义标注点和标签
    *  正在加载中的loadding提示

####  使用百度地图API
  
```html
    $(document).ready(loadScript());
    function loadScript() {
      var script = document.createElement("script");
      script.src = "http://api.map.baidu.com/api?v=1.4&callback=initMap";
      $("body").append(script);
    }

```
    
####  初始化map，将map添加到页面中
  
   ```html
   <script src="js/map.js"></script>
    <style type="text/css">
    #map-div {position: absolute; top: 0 ; left: 0; width: 100%;height: 100%;overflow: hidden}
    </style>

    <script>
    function initMap(){
     $(document).map({
       point_x: "118.763552",
       point_y: "32.060938",
       title: "河海大学",
       content: "地址：  虎踞路88号河海大学 <br>电话： (025)83786311",
     });
   }
   </script>
   ```
####  指定加载地图的id

 ```html
<div id="map-div" >

   </div>
```
    
