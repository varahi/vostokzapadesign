  var selected_2 = 0;
  jQuery(document).ready(function(){
    /* Map #2 init :: begin */
    var map_2 = new YMaps.Map( document.getElementById("YMapsID_2") );

    var mapdata_2 = [
      {
        name:'Школа флористики', 
        address:'Москва, Крутицкий вал, д.14',
      },
    ];

    map_2.addControl(new YMaps.TypeControl());
    map_2.addControl(new YMaps.ToolBar());
    map_2.addControl(new YMaps.Zoom());


    var t_2 = new YMaps.Template('<div><p><img src="/fileadmin/templates/images/logo/logo.gif"></p><p class="span-red-bold">$[name]</p><p>$[address]</p></div>');
    YMaps.Templates.add("nf#template", t_2);
    var s_2 = new YMaps.Style();
    s_2.balloonContentStyle = new YMaps.BalloonContentStyle("nf#template");

    for(idx in mapdata_2) {
      var d = mapdata_2[idx];
        if (idx == selected_2) d.selected_2 = true;
        if (d.point) {
          point = d.point
          place_2(d, point);
        } else {
          var geocoder = new YMaps.Geocoder(d.address);
          geocoder.odata = d;
          YMaps.Events.observe(geocoder, geocoder.Events.Load, function (geocoder) {
          point = geocoder.get(0).getGeoPoint();
          place_2(geocoder.odata, point);
        });
      }
    }

    function place_2(d, point) {
      var placemark = new YMaps.Placemark(point, {style: s_2} );
      placemark.name = d.name;
      placemark.address = d.address;
      map_2.addOverlay(placemark);    
      if (d.selected_2) {
        map_2.setCenter(point, 15);
        placemark.openBalloon();
      }
    }

    /* Map #2 init :: end */
  }); 