
//options that will be passed to the ProportionalClusterGroup constructor
var psClusterOptions = {
  maxRadius: 150, //max number of pixels between points that should be clustered
  spiderfyOnMaxZoom: true, //break out the points on maximum map zoom
  showCoverageOnHover: false, //show the geographic extent of the clusters on mouse hover
  zoomToBoundsOnClick: true, //zoom the geographic extent of the clusters on mouse click
  singleMarkerMode: false,
  disableClusteringAtZoom: null, //zoom level at which to stop clustering
  removeOutsideVisibleBounds: true, //improves performance by removing clusters outside of the current view
  animate: true, //animate events
  animateAddingMarkers: true, //animate marker add events
  spiderfyDistanceMultiplier: 1, //how far to separate spiderified cluster members
  spiderLegPolylineOptions: { //styling of the spiders
    weight: 1.5,
    color: '#222',
    opacity: 0.5 },
  chunkedLoading: true, //load the data incrementally
  chunkInterval: 50, // process markers for a maximum of ~ n milliseconds (then trigger the chunkProgress callback)
  chunkDelay: 50, // at the end of each interval, give n milliseconds back to system/browser
  chunkProgress: null, // progress callback: function(processed, total, elapsed) (e.g. for a progress indicator)
  polygonOptions: {},//Options to pass to the L.Polygon constructor
  rScale: d3.scale.sqrt, //radius scale
  rScaleDomain: [0, 4000], //domain of radius scale
  rScaleRange: [50,175], //range of radius values
  symbolCSS: ".marker-cluster{background-color:rgba(0, 179, 179, 0.25); border: 1 thin black;}",
  textNumberOfChildren: false
}

//options that will be passed to the circleMarkers constructor for the individual location markers
var circleOptions = {
  fillColor: '#b30000',
  stroke: false,
  opacity: 0.25
}


//options passed to the map constructor
var mapOptions = {
  zoomControl: false,
  minZoom: 9
}



//create a new map
var map = L.map('map', mapOptions).setView([40.69339446439378, -73.9754104614258], 11);

//add some tiles to the map
var tiles =  L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
    subdomains: 'abcd',
  });
tiles.addTo(map)

function makePopupText(d){
  //give the marker a popup
  t = "<h3>" + d.DATE + "<span class='text-muted'>" + d.TIME + "</span></h3>"
  t += "<table>"
  t += "<tr><td><strong>Injured: </strong></td><td><strong>" + d['NUMBER OF PERSONS INJURED'] + "</strong></td></tr>"
  t += "<tr><td>Pedestrians:</td><td>" + d['NUMBER OF PEDESTRIANS INJURED'] + "</td></tr>"
  t += "<tr><td>Cyclists:</td><td>" + d['NUMBER OF CYCLIST INJURED'] + "</td></tr>"
  t += "<tr><td>Motorists:</td><td>" + d['NUMBER OF MOTORIST INJURED'] + "</td></tr>"
  t += "<tr><td><strong>Killed: </strong></td><td><strong>" + d['NUMBER OF PERSONS KILLED'] + "</strong></td><tr>"
  t += "<tr><td>Pedestrians:</td><td>" + d['NUMBER OF PEDESTRIANS KILLED'] + "</td></tr>"
  t += "<tr><td>Cyclists:</td><td>" + d['NUMBER OF CYCLIST KILLED'] + "</td></tr>"
  t += "<tr><td>Motorists:</td><td>" + d['NUMBER OF MOTORIST KILLED'] + "</td></tr>"
  return t
}

$(document).ready(function(){
  //load data


  d3.csv("data/data-2016.csv", function(data){

    //map the cluster group
    var markers = new L.ProportionalClusterGroup(psClusterOptions);

    data.forEach(function(d){
      console.log(d)
      //convert to numbers so they go correctly on the map
        d.LATITUDE = +d.LATITUDE
        d.LONGITUDE = +d.LONGITUDE

        //make the leaflet markers
        m = new L.circleMarker(L.latLng(d['LATITUDE'], d['LONGITUDE']), circleOptions)
        popupText = makePopupText(d)

        m.bindPopup(popupText)

        markers.addLayer(m); //add it to the cluster group
      })

    //add the cluster layer to the map
    map.addLayer(markers);
  })
})
