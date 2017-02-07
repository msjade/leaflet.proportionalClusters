# Proportional Circles Library for Leaflet

Note: I didn't write most of this code. I only modified the [Leaflet.markerCluster](https://github.com/Leaflet/Leaflet.markercluster) code to make circles proportional to the number of children in the clusters. And to make the markers ```L.circleMarker```s instead of regular ```L.marker```s. 

Do you have a lot of points that need to be clustered? Do you want to represent the number of elements in each cluster by the size of the cluster marker? Do you want your proportional symbol clusters to change across zoom levels? 

If so, you might want to use this code for making proportional symbol clusters in Leaflet. It is an exension of the [Leaflet.markerCluster](https://github.com/Leaflet/Leaflet.markercluster) library that uses the number of children inside of a cluster (already calculated in ```L.markerCluster```) to dynamically set the radius of the symbol. The numeric label has been removed, though the sybmol can still be stilled via CSS.





