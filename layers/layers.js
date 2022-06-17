var wms_layers = [];

var format_map1_0 = new ol.format.GeoJSON();
var features_map1_0 = format_map1_0.readFeatures(json_map1_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_map1_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_map1_0.addFeatures(features_map1_0);
var lyr_map1_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_map1_0, 
                style: style_map1_0,
                interactive: true,
                title: '<img src="styles/legend/map1_0.png" /> map (1)'
            });
var format_map2_1 = new ol.format.GeoJSON();
var features_map2_1 = format_map2_1.readFeatures(json_map2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_map2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_map2_1.addFeatures(features_map2_1);
var lyr_map2_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_map2_1, 
                style: style_map2_1,
                interactive: true,
                title: '<img src="styles/legend/map2_1.png" /> map (2)'
            });

lyr_map1_0.setVisible(true);lyr_map2_1.setVisible(true);
var layersList = [lyr_map1_0,lyr_map2_1];
lyr_map1_0.set('fieldAliases', {'stroke': 'stroke', 'stroke-width': 'stroke-width', 'stroke-opacity': 'stroke-opacity', });
lyr_map2_1.set('fieldAliases', {});
lyr_map1_0.set('fieldImages', {'stroke': 'TextEdit', 'stroke-width': 'Range', 'stroke-opacity': 'Range', });
lyr_map2_1.set('fieldImages', {});
lyr_map1_0.set('fieldLabels', {'stroke': 'header label', 'stroke-width': 'header label', 'stroke-opacity': 'header label', });
lyr_map2_1.set('fieldLabels', {});
lyr_map2_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});