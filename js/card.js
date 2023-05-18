// card.js
function displayPlaceInfo(place) {
    var card = $('#card');
    card.empty();
    card.append('<h2>' + place.name + '</h2>');
    card.append('<p><strong>Address:</strong> ' + place.address + '</p>');
    card.append('<p><strong>Location:</strong> ' + place.location.lat + ', ' + place.location.lng + '</p>');
    card.append('<img src="' + place.photos[0].thumbnailUrl + '" alt="Thumbnail">');
    card.append('<p><strong>Price:</strong> ' + place.pricing.rate.amountFormatted + ' ' + place.pricing.rate.currency + ' per ' + place.pricing.rateType + '</p>');
    card.append('<p><strong>Primary Host:</strong> ' + place.primaryHost.firstName + '</p>');
}
