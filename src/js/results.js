// Initialize and add the map
function initMap() {
    // The location of each club
    var hamilton = { lat: 43.255016, lng: -79.868050 };
    var modrn = { lat: 43.2584358, lng: -79.877296 };
    var dd = { lat: 43.256571, lng: -79.8670827 };
    var trust = { lat: 43.2584397, lng: -79.8794847 };
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), { zoom: 13, center: hamilton });
    // The marker, positioned at Uluru
    var mdrnMarker = new google.maps.Marker({ position: modrn, map: map });
    var ddMarker = new google.maps.Marker({ position: dd, map: map });
    var trustMarker = new google.maps.Marker({ position: trust, map: map });

    var contentString = '<div id="content">' +
        '<div id="siteNotice">' +
        '</div>' +
        '<h1 id="firstHeading" class="firstHeading">Modrn</h1>' +
        '<div id="bodyContent">' +
        '<p><b>Modrn</b>, one of the most popular clubs on ' +
        'Hess st. and in all of Hamilton. Known for it\'s ' +
        'great selection of Hip/Hop and Pop music.</p>' +
        '<p>More info: Uluru, <a href="./clubs/modrn.html">' +
        'Detailed Info</a> ' +
        '</p>' +
        '</div>' +
        '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });


    mdrnMarker.addListener('click', function () {
        infowindow.open(map, mdrnMarker);
    });

    ddMarker.addListener('click', function () {
        infowindow.open(map, ddMarker);
    });

    trustMarker.addListener('click', function () {
        infowindow.open(map, trustMarker);
    });
}