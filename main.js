// Map Initialization
var map = L.map('map', {
  scrollWheelZoom: true,
  zoomControl: true,
  dragging: true,
  touchZoom: true,
  tap: true
}).setView([-6.16600, 39.5000], 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  maxZoom: 18
}).addTo(map);

// Marker Initialization
function initMarkers(data) {
  data.forEach(function (place) {
    var marker = L.marker([place.location.lat, place.location.lng]).addTo(map);

    // Create the card content
    const content = `
      <div class="card">
        <h3>${place.name}</h3>
        <p>${place.ward}</p>
        <img src="${place.photos[0].thumbnailUrl}" alt="${place.name}" />
        <p>Price: ${place.pricing.rate.amountFormatted} ${place.pricing.rate.currency}/${place.pricing.rateType}</p>
        <p>Host: ${place.primaryHost.firstName}</p>
        <a href="${place.url}" target="_blank" class="airbnb-btn">View on Airbnb</a>
      </div>
    `;

    // Bind the popup to the marker
    marker.bindPopup(content);

    // Remove the click event listener for the marker
    // marker.off('click');
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
  // This function is no longer needed since the card content is now displayed in the popup
}

// Replace this with the actual URL or path to your JSON file
var jsonDataUrl = 'data/fdlv5.json';

$.getJSON(jsonDataUrl, function (data) {
  initMarkers(data);
});
