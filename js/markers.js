// markers.js
function initMarkers(data) {
    data.forEach(function (place) {
        var marker = L.marker([place.location.lat, place.location.lng]).addTo(map);
        marker.on('click', function () {
            displayPlaceInfo(place);
        });
    });

    // Set the default place (e.g., the first place in the JSON data)
    var defaultPlace = data[0];
    displayPlaceInfo(defaultPlace);
}
