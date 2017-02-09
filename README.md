# Proportional Circles Library for Leaflet

Do you have a lot of points that need to be clustered? Do you want to represent the number of elements in each cluster by the size of the cluster marker? Do you want your proportional symbol clusters to change across zoom levels? 

If so, you might want to use this code for making proportional symbol clusters in Leaflet. It is an exension of the [Leaflet.markerCluster](https://github.com/Leaflet/Leaflet.markercluster) library that uses the number of children inside of a cluster (already calculated in ```L.markerCluster```) to dynamically set the radius of the symbol. 


### API Reference

The options that can be passed to the ```L.proportionalClusterGroup``` constructor are largely the same as those thst can be passed to the ```L.markerClusterGroup``` constructor.

- **```L.ProportionalClusterGroup(options)```**: 

  Options:
  -  ```maxRadius```: maximum number of pixels between points that should be clustered (default ```150```)
  - ```spiderfyOnMaxZoom```: break out the points on maximum map zoom (default ```true```)
  - ```showCoverageOnHover```: show the geographic extent of the clusters on mouse hover (default ```false```)
  - ```zoomToBoundsOnClick```: zoom the geographic extent of the clusters on mouse click (default ```true```)
  - ```animate```: animate events (default ```true```)
  - ```animateAddingMarkers```: animate marker add events (default ```true```)
  - ```spiderfyDistanceMultiplier```: how far to separate spiderified cluster members (default ```1```)
  - ```spiderLegPolylineOptions```:  styling of the spiders (default ```{weight: 1.5, color: '#222', opacity: 0.5 }```
  - ```polygonOptions```: Options to pass to the L.Polygon constructor for geographic extent polygon (defailt ```{}```)
  - ```rScale```: D3 scale for scaling circle radius values (default ```d3.scale.linear```)
  - ```rScaleDomain```: Input domain of radius scaling function (default ```[0, 500]```)
  - ```rScaleRange```: Output range of radius scaling function (default ```[25, 75```)
  - ```symbolCSS```: Text string representation of CSS to be applied. (default ```".marker-cluster{background-color:rgba(0, 179, 179, 0.25); border: 1 thin black;}"```,
  - ```textNumberOfChildren``` Include the number of children in each cluster symbol (default ```false```)



Note: I didn't write most of this code. I only modified the [Leaflet.markerCluster](https://github.com/Leaflet/Leaflet.markercluster) code to make circles proportional to the number of children in the clusters. And to make the markers ```L.circleMarker```s instead of regular ```L.marker```s. 


TODO: 

- Symbolize by Value
- Better CSS styling with jquery
- Remove dependency on CSS
- Remove dependency on D3 scales
- Automatically create ```CircleMarkers``` instead of passing in pre-created markers? 


