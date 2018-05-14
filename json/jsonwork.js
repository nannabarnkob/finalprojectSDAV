function myFunction() {


var fs = require('fs');
var turfCentroid = require('turf-centroid');
var geojson = require('http://wfs-kbhkort.kk.dk/k101/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=k101:samlede_socio_data_kbh&outputFormat=json&SRSNAME=EPSG:4326&');
console.log(geojson)
var result = {
    "type": "FeatureCollection",
    "features": []
};

for (var i = 0; i < json.features.length; i++) {
    result.features.push(
        {
            "type": "Feature",
            "properties": {"id": json.features[i].properties.id},
            "geometry": turfCentroid(json.features[i]).geometry
        }
    );
}


fs.writeFile(path.join("./public/data", `labels.geojson.json`), JSON.stringify(result, null, '  '));
console.log(result)
}
