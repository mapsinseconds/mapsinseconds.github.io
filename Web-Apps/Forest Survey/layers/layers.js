var wms_layers = [];

var lyr_OpenStreetMap_0 = new ol.layer.Tile({
    'title': 'OpenStreetMap',
    //'type': 'base',
    'opacity': 1.000000,
            
            
	source: new ol.source.XYZ({
		attributions: '<a href=""></a>', url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
	})
});




var format_ChangePercentwrtISFR2015_1 = new ol.format.GeoJSON();
var features_ChangePercentwrtISFR2015_1 = format_ChangePercentwrtISFR2015_1.readFeatures(json_ChangePercentwrtISFR2015_1, {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ChangePercentwrtISFR2015_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});

jsonSource_ChangePercentwrtISFR2015_1.addFeatures(features_ChangePercentwrtISFR2015_1);
var lyr_ChangePercentwrtISFR2015_1 = new ol.layer.Vector({
    type: 'base',
	declutter: true,
    source:jsonSource_ChangePercentwrtISFR2015_1, 
    style: style_ChangePercentwrtISFR2015_1,
    title: 'Change Percent wrt ISFR 2015<br />'
});




var format_OpenForest_2 = new ol.format.GeoJSON();
var features_OpenForest_2 = format_OpenForest_2.readFeatures(json_OpenForest_2, {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OpenForest_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});

jsonSource_OpenForest_2.addFeatures(features_OpenForest_2);
var lyr_OpenForest_2 = new ol.layer.Vector({
    type: 'base',
	declutter: true,
    source:jsonSource_OpenForest_2, 
    style: style_OpenForest_2,
    title: 'Open Forest<br />'
});




var format_ModeratelyDenseForest_3 = new ol.format.GeoJSON();
var features_ModeratelyDenseForest_3 = format_ModeratelyDenseForest_3.readFeatures(json_ModeratelyDenseForest_3, {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ModeratelyDenseForest_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});

jsonSource_ModeratelyDenseForest_3.addFeatures(features_ModeratelyDenseForest_3);
var lyr_ModeratelyDenseForest_3 = new ol.layer.Vector({
    type: 'base',
	declutter: true,
    source:jsonSource_ModeratelyDenseForest_3, 
    style: style_ModeratelyDenseForest_3,
    title: 'Moderately Dense Forest<br />'
});




var format_VeryDenseForest_4 = new ol.format.GeoJSON();
var features_VeryDenseForest_4 = format_VeryDenseForest_4.readFeatures(json_VeryDenseForest_4, {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VeryDenseForest_4 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});

jsonSource_VeryDenseForest_4.addFeatures(features_VeryDenseForest_4);
var lyr_VeryDenseForest_4 = new ol.layer.Vector({
    type: 'base',
	declutter: true,
    source:jsonSource_VeryDenseForest_4, 
    style: style_VeryDenseForest_4,
    title: 'Very Dense Forest<br />'
});




var format_GeographicCover_5 = new ol.format.GeoJSON();
var features_GeographicCover_5 = format_GeographicCover_5.readFeatures(json_GeographicCover_5, {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GeographicCover_5 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});

jsonSource_GeographicCover_5.addFeatures(features_GeographicCover_5);
var lyr_GeographicCover_5 = new ol.layer.Vector({
    type: 'base',
	declutter: true,
    source:jsonSource_GeographicCover_5, 
    style: style_GeographicCover_5,
    title: 'Geographic Cover<br />'
});


lyr_OpenStreetMap_0.setVisible(true);
lyr_ChangePercentwrtISFR2015_1.setVisible(false);
lyr_OpenForest_2.setVisible(false);
lyr_ModeratelyDenseForest_3.setVisible(false);
lyr_VeryDenseForest_4.setVisible(false);
lyr_GeographicCover_5.setVisible(false);


var layersList = [lyr_OpenStreetMap_0,lyr_ChangePercentwrtISFR2015_1,lyr_OpenForest_2,lyr_ModeratelyDenseForest_3,lyr_VeryDenseForest_4,lyr_GeographicCover_5];


lyr_ChangePercentwrtISFR2015_1.set('fieldAliases', {'ID': 'ID', 'StateName': 'StateName', 'Type': 'Type', 'Change Percent wrt ISFR 2015': 'Change Percent wrt ISFR 2015', });

lyr_OpenForest_2.set('fieldAliases', {'ID': 'ID', 'StateName': 'StateName', 'Type': 'Type', 'Open Forest Cover_Forest': 'Open Forest Cover', 'Open Forest Cover_Open Forest Cover': 'Open Forest Cover_Open Forest Cover', });

lyr_ModeratelyDenseForest_3.set('fieldAliases', {'ID': 'ID', 'StateName': 'StateName', 'Type': 'Type', 'Moderately Dense Forest Cover_Forest': 'Moderately Dense Forest Cover', 'Moderately Dense Forest Cover_Moderately Dense Forest Cover': 'Moderately Dense Forest Cover_Moderately Dense Forest Cover', });

lyr_VeryDenseForest_4.set('fieldAliases', {'ID': 'ID', 'StateName': 'StateName', 'Type': 'Type', 'Very Dense Forest Cover_Forest': 'Very Dense Forest Cover', 'Very Dense Forest Cover_Very Dense Forest Cover': 'Very Dense Forest Cover_Very Dense Forest Cover', });

lyr_GeographicCover_5.set('fieldAliases', {'ID': 'ID', 'StateName': 'StateName', 'Type': 'Type', 'Geographic_Geographic': 'Geographic Cover', 'Geographic_Geographic Cover': 'Geographic_Geographic Cover', });




lyr_ChangePercentwrtISFR2015_1.set('fieldImages', {'ID': 'Hidden', 'StateName': 'TextEdit', 'Type': 'TextEdit', 'Change Percent wrt ISFR 2015': 'TextEdit', });

lyr_OpenForest_2.set('fieldImages', {'ID': 'Hidden', 'StateName': 'TextEdit', 'Type': 'TextEdit', 'Open Forest Cover_Forest': 'TextEdit', 'Open Forest Cover_Open Forest Cover': 'Hidden', });

lyr_ModeratelyDenseForest_3.set('fieldImages', {'ID': 'Hidden', 'StateName': 'TextEdit', 'Type': 'TextEdit', 'Moderately Dense Forest Cover_Forest': 'TextEdit', 'Moderately Dense Forest Cover_Moderately Dense Forest Cover': 'Hidden', });

lyr_VeryDenseForest_4.set('fieldImages', {'ID': 'Hidden', 'StateName': 'TextEdit', 'Type': 'TextEdit', 'Very Dense Forest Cover_Forest': 'TextEdit', 'Very Dense Forest Cover_Very Dense Forest Cover': 'Hidden', });

lyr_GeographicCover_5.set('fieldImages', {'ID': 'Hidden', 'StateName': 'TextEdit', 'Type': 'TextEdit', 'Geographic_Geographic': 'TextEdit', 'Geographic_Geographic Cover': 'Hidden', });




lyr_ChangePercentwrtISFR2015_1.set('fieldLabels', {'StateName': 'header label', 'Type': 'header label', 'Change Percent wrt ISFR 2015': 'header label', });

lyr_OpenForest_2.set('fieldLabels', {'StateName': 'header label', 'Type': 'header label', 'Open Forest Cover_Forest': 'header label', });

lyr_ModeratelyDenseForest_3.set('fieldLabels', {'StateName': 'header label', 'Type': 'header label', 'Moderately Dense Forest Cover_Forest': 'header label', });

lyr_VeryDenseForest_4.set('fieldLabels', {'StateName': 'header label', 'Type': 'header label', 'Very Dense Forest Cover_Forest': 'header label', });

lyr_GeographicCover_5.set('fieldLabels', {'StateName': 'header label', 'Type': 'header label', 'Geographic_Geographic': 'header label', });




lyr_GeographicCover_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});