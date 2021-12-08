// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with center and zoom level.
let map = L.map('mapid').setView([30, 30], 2);

  // We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

// Add GeoJSON data.
let airportData = "https://raw.githubusercontent.com/khanh703/Mapping_Earthquakes/main/majorAirports.json";

// Grabbing our GeoJSON data.
//L.geoJSON(sanFranAirport).addTo(map);

// Grabbing our GeoJSON data.
L.geoJSON(sanFranAirport, {
  // We turn each feature into a marker on the map.
  /*
  pointToLayer: function(feature, latlng) {
    console.log(feature);
    let popup = L.popup().setContent("<h2>"+feature.properties.name +", " +feature.properties.country+ "</h2><hr><h3>Timezone " + feature.properties.tz+"</h3>");
    return L.marker(latlng)
    .bindPopup(popup);
  }
  */
 // what is the difference?
  onEachFeature: function(feature, layer) {
    let popup = L.popup().setContent("<h2>"+feature.properties.name +", " +feature.properties.country+ "</h2><hr><h3>Timezone " + feature.properties.tz+"</h3>");
    layer.bindPopup(popup);
   }
}).addTo(map);

// Loop through the cities array and create one marker for each city.
/*
cityData.forEach((city)=> {
  let popup = L.popup().setContent("<h2>"+city.city +", " +city.state+ "</h2><hr><h3>Population " + Number(city.population).toLocaleString()+"</h3>");
  L.marker(city.location).bindPopup(popup).addTo(map);

});
*/