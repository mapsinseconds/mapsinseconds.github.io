var wms_layers = [];

        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_delhi_1 = new ol.format.GeoJSON();
var features_delhi_1 = format_delhi_1.readFeatures(json_delhi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_delhi_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_delhi_1.addFeatures(features_delhi_1);var lyr_delhi_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_delhi_1, 
                style: style_delhi_1,
                title: '<img src="styles/legend/delhi_1.png" /> Delhi_Basemap'
            });var format_Buffered_2 = new ol.format.GeoJSON();
var features_Buffered_2 = format_Buffered_2.readFeatures(json_Buffered_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffered_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Buffered_2.addFeatures(features_Buffered_2);var lyr_Buffered_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Buffered_2, 
                style: style_Buffered_2,
                title: '<img src="styles/legend/Buffered_2.png" /> Buffer of 1 km'
            });var format_delhi_bank_3 = new ol.format.GeoJSON();
var features_delhi_bank_3 = format_delhi_bank_3.readFeatures(json_delhi_bank_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_delhi_bank_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_delhi_bank_3.addFeatures(features_delhi_bank_3);var lyr_delhi_bank_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_delhi_bank_3, 
                style: style_delhi_bank_3,
                title: '<img src="styles/legend/delhi_bank_3.png" /> Delhi_Bank'
            });var format_delhi_atm_4 = new ol.format.GeoJSON();
var features_delhi_atm_4 = format_delhi_atm_4.readFeatures(json_delhi_atm_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_delhi_atm_4 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_delhi_atm_4.addFeatures(features_delhi_atm_4);var lyr_delhi_atm_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_delhi_atm_4, 
                style: style_delhi_atm_4,
                title: '<img src="styles/legend/delhi_atm_4.png" /> Delhi_ATM'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_delhi_1.setVisible(true);lyr_Buffered_2.setVisible(false);lyr_delhi_bank_3.setVisible(true);lyr_delhi_atm_4.setVisible(false);
var layersList = [lyr_OpenStreetMap_0,lyr_delhi_1,lyr_Buffered_2,lyr_delhi_bank_3,lyr_delhi_atm_4];
lyr_delhi_1.set('fieldAliases', {'gid': 'gid', 'name_1': 'name_1', });
lyr_Buffered_2.set('fieldAliases', {'gid': 'gid', 'category': 'category', 'name': 'name', 'Size': 'Size', });
lyr_delhi_bank_3.set('fieldAliases', {'gid': 'gid', 'category': 'category', 'Name': 'Name', });
lyr_delhi_atm_4.set('fieldAliases', {'gid': 'gid', 'category': 'category', 'Name': 'Name', 'Total Cash': 'Total Cash', 'No.Transac': 'No.Transac', });


lyr_delhi_1.set('fieldImages', {'gid': 'Hidden', 'name_1': 'Hidden', });
lyr_Buffered_2.set('fieldImages', {'gid': 'Hidden', 'category': 'Hidden', 'name': 'Hidden', 'Size': 'Hidden', });
lyr_delhi_bank_3.set('fieldImages', {'gid': 'Hidden', 'category': 'Hidden', 'Name': 'TextEdit', });
lyr_delhi_atm_4.set('fieldImages', {'gid': 'Hidden', 'category': 'Hidden', 'Name': 'TextEdit', 'Total Cash': 'TextEdit', 'No.Transac': 'TextEdit', });


lyr_delhi_1.set('fieldLabels', {});
lyr_Buffered_2.set('fieldLabels', {});
lyr_delhi_bank_3.set('fieldLabels', {'Name': 'header label', });
lyr_delhi_atm_4.set('fieldLabels', {'Name': 'header label', 'Total Cash': 'inline label', 'No.Transac': 'inline label', });
lyr_delhi_atm_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});