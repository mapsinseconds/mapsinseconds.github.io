var wms_layers = [];


var format_Buffered_0 = new ol.format.GeoJSON();
var features_Buffered_0 = format_Buffered_0.readFeatures(json_Buffered_0, {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffered_0 = new ol.source.Vector({
		attributions: '<a href=""></a>',
	});

jsonSource_Buffered_0.addFeatures(features_Buffered_0);
var lyr_Buffered_0 = new ol.layer.Vector({
        type: 'base',
		declutter: true,
        source:jsonSource_Buffered_0, 
        style: style_Buffered_0,
        title: '<img src="styles/legend/Buffered_0.png" /> Buffer of 1 km <br> <img src="styles/legend/atm_selected_1.png" /> Buffer_Result (Selected ATMs)'
    });



	
var format_atm_selected_1 = new ol.format.GeoJSON();
var features_atm_selected_1 = format_atm_selected_1.readFeatures(json_atm_selected_1, {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_atm_selected_1 = new ol.source.Vector({
		attributions: '<a href=""></a>',
	});

jsonSource_atm_selected_1.addFeatures(features_atm_selected_1);
var lyr_atm_selected_1 = new ol.layer.Vector({
		type: 'base',
		declutter: true,
		source:jsonSource_atm_selected_1, 
		style: style_atm_selected_1,
		//title: '<img src="styles/legend/atm_selected_1.png" /> Buffer_Result'
	});
	
	


var lyr_OpenStreetMap_2 = new ol.layer.Tile({
        'title': 'OpenStreetMap',
        //'type': 'base',
        'opacity': 1.000000,
                
        source: new ol.source.XYZ({
			attributions: '<a href=""></a>',
            url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
        })
    });
	
	
	
var format_delhi_3 = new ol.format.GeoJSON();
var features_delhi_3 = format_delhi_3.readFeatures(json_delhi_3, {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_delhi_3 = new ol.source.Vector({
		attributions: '<a href=""></a>',
	});
	
jsonSource_delhi_3.addFeatures(features_delhi_3);
var lyr_delhi_3 = new ol.layer.Vector({
        //type: 'base',
		declutter: true,
        source:jsonSource_delhi_3, 
        style: style_delhi_3,
        title: '<img src="styles/legend/delhi_3.png" /> Delhi-BaseMap'
    });
	
	
	
	
var format_delhi_atm_4 = new ol.format.GeoJSON();
var features_delhi_atm_4 = format_delhi_atm_4.readFeatures(json_delhi_atm_4, {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_delhi_atm_4 = new ol.source.Vector({
		attributions: '<a href=""></a>',
	});
	
jsonSource_delhi_atm_4.addFeatures(features_delhi_atm_4);
var lyr_delhi_atm_4 = new ol.layer.Vector({
        //type: 'base',
		declutter: true,
        source:jsonSource_delhi_atm_4, 
        style: style_delhi_atm_4,
        title: '<img src="styles/legend/delhi_atm_4.png" /> Delhi_ATM'
    });
	
	
	
	
	
var format_delhi_bank_5 = new ol.format.GeoJSON();
var features_delhi_bank_5 = format_delhi_bank_5.readFeatures(json_delhi_bank_5, {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_delhi_bank_5 = new ol.source.Vector({
		attributions: '<a href=""></a>',
	});
	
jsonSource_delhi_bank_5.addFeatures(features_delhi_bank_5);var lyr_delhi_bank_5 = new ol.layer.Vector({
        //type: 'base',
		declutter: true,
        source:jsonSource_delhi_bank_5, 
        style: style_delhi_bank_5,
        title: '<img src="styles/legend/delhi_bank_5.png" /> Delhi_Bank'
    });
	
/*var group_Buffer = new ol.layer.Group({
		layers: [lyr_Buffered_0,lyr_atm_selected_1,],
		//visible: 'true',
		title: "Buffer"}
	);*/

lyr_Buffered_0.setVisible(false);
lyr_atm_selected_1.setVisible(false);
lyr_OpenStreetMap_2.setVisible(true);
lyr_delhi_3.setVisible(true);
lyr_delhi_atm_4.setVisible(true);
lyr_delhi_bank_5.setVisible(true);


var layersList = [lyr_OpenStreetMap_2,lyr_delhi_3,lyr_delhi_atm_4,lyr_Buffered_0,lyr_atm_selected_1,lyr_delhi_bank_5,];


lyr_Buffered_0.set('fieldAliases', {'gid': 'gid', 'category': 'category', 'name': 'name', 'Size': 'Size', });

lyr_atm_selected_1.set('fieldAliases', {'gid': 'gid', 'category': 'category', 'name': 'name', });

lyr_delhi_3.set('fieldAliases', {'gid': 'gid', 'name_1': 'name_1', });

lyr_delhi_atm_4.set('fieldAliases', {'gid': 'gid', 'category': 'category', 'name': 'name', });

lyr_delhi_bank_5.set('fieldAliases', {'gid': 'gid', 'category': 'category', 'name': 'name', });



lyr_Buffered_0.set('fieldImages', {'gid': 'Hidden', 'category': 'Hidden', 'name': 'Hidden', 'Size': 'Hidden', });

lyr_atm_selected_1.set('fieldImages', {'gid': 'Hidden', 'category': 'Hidden', 'name': 'TextEdit', });

lyr_delhi_3.set('fieldImages', {'gid': 'Hidden', 'name_1': 'Hidden', });

lyr_delhi_atm_4.set('fieldImages', {'gid': 'Hidden', 'category': 'Hidden', 'name': 'TextEdit', });

lyr_delhi_bank_5.set('fieldImages', {'gid': 'Hidden', 'category': 'Hidden', 'name': 'TextEdit', });



lyr_Buffered_0.set('fieldLabels', {});

lyr_atm_selected_1.set('fieldLabels', {});

lyr_delhi_3.set('fieldLabels', {});

lyr_delhi_atm_4.set('fieldLabels', {'name': 'header label', });

lyr_delhi_bank_5.set('fieldLabels', {'name': 'header label', });



lyr_delhi_bank_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});