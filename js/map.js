function initMap() {
        var myLatLng = {lat: 59.9237209, lng: 30.2716798},
            markerPosition1 = {lat: 60.0467793, lng: 30.4310691},
            markerPosition2 = {lat: 59.8705167, lng: 30.1608474},
            markerPosition3 = {lat: 59.8297534, lng: 30.4013607},
            markerPosition4 = {lat: 59.9636195, lng: 30.2433153},
            popupContent = '<p class="contacts-info-text">Информация</p>';

        var map = new google.maps.Map(document.getElementById('map'), {
          center: myLatLng,
          zoom: 10});

        var marker1 = new google.maps.Marker({
          icon: 'map-marker.svg',
          map: map,
          position: markerPosition1,
          animation: google.maps.Animation.BOUNCE,
          // title: 'Hello World!'
        });
        var marker2 = new google.maps.Marker({
          icon: 'map-marker.svg',
          map: map,
          position: markerPosition2,
          animation: google.maps.Animation.BOUNCE,
        });
        var marker3 = new google.maps.Marker({
          icon: 'map-marker.svg',
          map: map,
          position: markerPosition3,
          animation: google.maps.Animation.BOUNCE,
        });
        var marker4 = new google.maps.Marker({
          icon: 'map-marker.svg',
          map: map,
          position: markerPosition4,
          animation: google.maps.Animation.BOUNCE,
        });

        marker1.addListener('click', function () {
            marker1.setAnimation(null);
            infowindow.open(map, marker1);
        });
        marker2.addListener('click', function () {
            marker2.setAnimation(null);
             infowindow.open(map, marker2);
        });
        marker3.addListener('click', function () {
            marker3.setAnimation(null);
             infowindow.open(map, marker3);
        });
        marker4.addListener('click', function () {
            marker4.setAnimation(null);
             infowindow.open(map, marker4);
        });
        infowindow = new google.maps.InfoWindow({content: popupContent});
}
