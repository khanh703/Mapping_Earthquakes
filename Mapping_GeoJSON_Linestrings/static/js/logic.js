// Add console.log to check to see if our code is working.
console.log("working");

  // We create the tile layer that will be the background of our map.
let daytime = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: API_KEY
});

let nightTime = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
  Day: daytime,
  Night: nightTime
};

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
  center: [44.0, -80.0],
  zoom: 2,
  layers: [nightTime]
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Then we add our 'graymap' tile layer to the map.
nightTime.addTo(map);

// Add GeoJSON data.
let torontoData = "https://raw.githubusercontent.com/khanh703/Mapping_Earthquakes/main/torontoRoutes.json";

// Grabbing our GeoJSON data.
d3.json(torontoData).then(function(data) {
  console.log('data', data);
  let myStyle = {
    color: "#ffffa1",
    weight: 2
}
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data, {
   style: myStyle,
   onEachFeature: function(feature, layer){
    let popup = L.popup().setContent("<h2>"+feature.properties.airline +", " +feature.properties.dst+ "</h2>");
    layer.bindPopup(popup)
   }
  }).addTo(map);
});






































// Grabbing our GeoJSON data.
//L.geoJSON(sanFranAirport, {
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
 /*
  onEachFeature: function(feature, layer) {
    let popup = L.popup().setContent("<h2>"+feature.properties.name +", " +feature.properties.country+ "</h2><hr><h3>Timezone " + feature.properties.tz+"</h3>");
    layer.bindPopup(popup);
   }
}).addTo(map);


// Loop through the cities array and create one marker for each city.

cityData.forEach((city)=> {
  let popup = L.popup().setContent("<h2>"+city.city +", " +city.state+ "</h2><hr><h3>Population " + Number(city.population).toLocaleString()+"</h3>");
  L.marker(city.location).bindPopup(popup).addTo(map);

});
*/