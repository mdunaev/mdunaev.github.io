var map = new google.maps.Map(document.getElementById('map_canvas'), {
		zoom: 11,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		center: new google.maps.LatLng(36.322356, 139.013057),
	});


var markers = [];

var refresh = function() {

	google.maps.event.clearListeners(map, "tilesloaded");
   // send the new bounds back to your server
   var bounds =  map.getBounds();
   var lat_sw = bounds.R.R;
   var lat_ne = bounds.R.j;
   var lon_sw = bounds.j.j;
   var lon_ne = bounds.j.R;
   var acces_token = '56d166a449c75f9b824e2dc6%7C5ffb9d1834e39a5b0643fb2c65f4cd1e';

   var coord = lat_ne + ',' + lon_ne + ',' + lat_sw + ',' + lon_sw;

	var url = 'http://api.openweathermap.org/data/2.5/box/station?cluster=no&cnt=200&format=json&bbox='+coord+'&appid=44db6a862fba0b067b1930da0d769e98';

	console.log(url);
   d3.json(url, function(e, d){

     for (var i = 0; i < markers.length; i++) {
       markers[i].setMap(null);
     };

     markers = [];

     var temperature;
     if(!d.body){
       console.log(d);
       return;
     }

     var lngth = d.body.length;
     var numToDelete = 0;

     if(lngth>400) numToDelete = lngth-400;

     for (var i = 0; i < numToDelete; i++) {
       var rnd = Math.floor(d.body.length * Math.random());
       d.body.splice(rnd, 1);
     }


     for (var i = 0; i < d.body.length; i += 2 ) {
        var coord = d.body[i].place.location;
        var lat = coord[1];
        var lng = coord[0];
        var modules = d.body[i].modules[0];

        if(d.body[i].measures[modules]){
          for(var name in d.body[i].measures[modules].res ){
            temperature = d.body[i].measures[modules].res[name][0];
          }
          //draw markers
          var marker = new google.maps.Marker({
             position: {lat:lat, lng: lng},
             map: map,
             title: temperature.toString()
           });

           markers.push(marker);
       } else {
          console.log(d.body[i])
       }
     }
   });
};

google.maps.event.addListener(map, "dragend", refresh);
google.maps.event.addListener(map, "tilesloaded", refresh);
google.maps.event.addListener(map, "zoom_changed", refresh);
