var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps:',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_threeday_1 = new ol.format.GeoJSON();
var features_threeday_1 = format_threeday_1.readFeatures(json_threeday_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_threeday_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_threeday_1.addFeatures(features_threeday_1);
var lyr_threeday_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_threeday_1, 
                style: style_threeday_1,
                popuplayertitle: "three day",
                interactive: true,
                title: '<img src="styles/legend/threeday_1.png" /> three day'
            });
var format_twoday_2 = new ol.format.GeoJSON();
var features_twoday_2 = format_twoday_2.readFeatures(json_twoday_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_twoday_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_twoday_2.addFeatures(features_twoday_2);
var lyr_twoday_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_twoday_2, 
                style: style_twoday_2,
                popuplayertitle: "two day",
                interactive: true,
                title: '<img src="styles/legend/twoday_2.png" /> two day'
            });
var format_oneday_3 = new ol.format.GeoJSON();
var features_oneday_3 = format_oneday_3.readFeatures(json_oneday_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_oneday_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_oneday_3.addFeatures(features_oneday_3);
var lyr_oneday_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_oneday_3, 
                style: style_oneday_3,
                popuplayertitle: "one day",
                interactive: true,
                title: '<img src="styles/legend/oneday_3.png" /> one day'
            });

lyr_GoogleMaps_0.setVisible(true);lyr_threeday_1.setVisible(true);lyr_twoday_2.setVisible(true);lyr_oneday_3.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_threeday_1,lyr_twoday_2,lyr_oneday_3];
lyr_threeday_1.set('fieldAliases', {'id': 'id', 'name': 'name', 'picture': 'picture', });
lyr_twoday_2.set('fieldAliases', {'id': 'id', 'name': 'name', 'picture': 'picture', });
lyr_oneday_3.set('fieldAliases', {'id': 'id', 'name': 'name', 'picture': 'picture', });
lyr_threeday_1.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'picture': 'TextEdit', });
lyr_twoday_2.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'picture': 'TextEdit', });
lyr_oneday_3.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'picture': 'TextEdit', });
lyr_threeday_1.set('fieldLabels', {'id': 'header label - always visible', 'name': 'no label', 'picture': 'header label - visible with data', });
lyr_twoday_2.set('fieldLabels', {'id': 'header label - always visible', 'name': 'no label', 'picture': 'header label - visible with data', });
lyr_oneday_3.set('fieldLabels', {'id': 'header label - always visible', 'name': 'no label', 'picture': 'header label - always visible', });
lyr_oneday_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});