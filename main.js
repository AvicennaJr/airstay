// Map Initialization
var map = L.map('map',{
    scrollWheelZoom: true,
    zoomControl: true,
    dragging: true,
    touchZoom: true,
    tap: true
}).setView([-6.16600, 39.5000], 10);
// var map = L.map('map').setView([-6.141558, 39.334626],10);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 18
}).addTo(map);

// Marker Initialization
function initMarkers(data) {
    data.forEach(function (place) {
        var marker = L.marker([place.location.lat, place.location.lng]).addTo(map);
        marker.on('click', function () {
            displayPlaceInfo(place);
        });
    });

    // Get the number of places in the JSON data
    var numPlaces = data.length;

    // Generate a random number between 0 and numPlaces - 1
    var randomIndex = Math.floor(Math.random() * numPlaces);

    // Set the default place to the place at the random index
    var defaultPlace = data[randomIndex];

    // Display the information for the default place
    displayPlaceInfo(defaultPlace);
}

// Card Display
function displayPlaceInfo(place) {
    var card = $('#card');
    card.empty();
    card.append('<h2>' + place.name + '</h2>');
    card.append('<img src="' + place.photos[0].thumbnailUrl + '" alt="Thumbnail">');
    card.append('<p><strong>Address:</strong> ' + place.address + '</p>');
    card.append('<p><strong>Location:</strong> ' + place.location.lat + ', ' + place.location.lng + '</p>');
    card.append('<p><strong>Price:</strong> ' + place.pricing.rate.amountFormatted + ' ' + place.pricing.rate.currency + ' per ' + place.pricing.rateType + '</p>');
    card.append('<p><strong>Primary Host:</strong> ' + place.primaryHost.firstName + '</p>');
}

// Replace this with the actual URL or path to your JSON file
var jsonDataUrl = 'data/fdlv4.json';

$.getJSON(jsonDataUrl, function(data) {
    initMarkers(data);
});
