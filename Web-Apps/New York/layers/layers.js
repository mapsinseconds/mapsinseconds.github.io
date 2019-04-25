var wms_layers = [];

        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_PrimaryResidentialZone_1 = new ol.format.GeoJSON();
var features_PrimaryResidentialZone_1 = format_PrimaryResidentialZone_1.readFeatures(json_PrimaryResidentialZone_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrimaryResidentialZone_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_PrimaryResidentialZone_1.addFeatures(features_PrimaryResidentialZone_1);var lyr_PrimaryResidentialZone_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PrimaryResidentialZone_1, 
                style: style_PrimaryResidentialZone_1,
                title: '<img src="styles/legend/PrimaryResidentialZone_1.png" /> Primary Residential Zone'
            });var format_Library_2 = new ol.format.GeoJSON();
var features_Library_2 = format_Library_2.readFeatures(json_Library_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Library_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Library_2.addFeatures(features_Library_2);var lyr_Library_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Library_2, 
                style: style_Library_2,
                title: '<img src="styles/legend/Library_2.png" /> Library'
            });var format_School_3 = new ol.format.GeoJSON();
var features_School_3 = format_School_3.readFeatures(json_School_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_School_3 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_School_3.addFeatures(features_School_3);var lyr_School_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_School_3, 
                style: style_School_3,
                title: '<img src="styles/legend/School_3.png" /> School'
            });var format_SubwayStation_4 = new ol.format.GeoJSON();
var features_SubwayStation_4 = format_SubwayStation_4.readFeatures(json_SubwayStation_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SubwayStation_4 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_SubwayStation_4.addFeatures(features_SubwayStation_4);var lyr_SubwayStation_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SubwayStation_4, 
                style: style_SubwayStation_4,
                title: '<img src="styles/legend/SubwayStation_4.png" /> SubwayStation'
            });var format_Hospital_5 = new ol.format.GeoJSON();
var features_Hospital_5 = format_Hospital_5.readFeatures(json_Hospital_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hospital_5 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Hospital_5.addFeatures(features_Hospital_5);var lyr_Hospital_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hospital_5, 
                style: style_Hospital_5,
                title: '<img src="styles/legend/Hospital_5.png" /> Hospital'
            });var format_IntersectionNYAPLHSSS_6 = new ol.format.GeoJSON();
var features_IntersectionNYAPLHSSS_6 = format_IntersectionNYAPLHSSS_6.readFeatures(json_IntersectionNYAPLHSSS_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_IntersectionNYAPLHSSS_6 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_IntersectionNYAPLHSSS_6.addFeatures(features_IntersectionNYAPLHSSS_6);var lyr_IntersectionNYAPLHSSS_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IntersectionNYAPLHSSS_6, 
                style: style_IntersectionNYAPLHSSS_6,
                title: '<img src="styles/legend/IntersectionNYAPLHSSS_6.png" /> Intersection(NYAP,L,H,S,SS)'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_PrimaryResidentialZone_1.setVisible(false);lyr_Library_2.setVisible(false);lyr_School_3.setVisible(false);lyr_SubwayStation_4.setVisible(false);lyr_Hospital_5.setVisible(false);lyr_IntersectionNYAPLHSSS_6.setVisible(false);
var layersList = [lyr_OpenStreetMap_0,lyr_PrimaryResidentialZone_1,lyr_Library_2,lyr_School_3,lyr_SubwayStation_4,lyr_Hospital_5,lyr_IntersectionNYAPLHSSS_6];
lyr_PrimaryResidentialZone_1.set('fieldAliases', {'gid': 'gid', 'id': 'id', 'zone': 'zone', });
lyr_Library_2.set('fieldAliases', {'gid': 'gid', 'id': 'id', 'Library': 'Library', 'address': 'address', 'Zip Code': 'Zip Code', 'factype': 'factype', 'facname': 'facname', 'capacity': 'capacity', 'capname': 'capname', 'bcode': 'bcode', 'xcoord': 'xcoord', 'ycoord': 'ycoord', });
lyr_School_3.set('fieldAliases', {'gid': 'gid', 'id': 'id', 'School': 'School', 'address': 'address', 'Zip Code': 'Zip Code', 'factype': 'factype', 'facname': 'facname', 'capacity': 'capacity', 'capname': 'capname', 'prek8_enr': 'prek8_enr', 'g912_enr': 'g912_enr', 'sd': 'sd', 'bcode': 'bcode', 'xcoord': 'xcoord', 'ycoord': 'ycoord', });
lyr_SubwayStation_4.set('fieldAliases', {'gid': 'gid', 'stop_id': 'stop_id', 'Subway St': 'Subway St', 'bcode': 'bcode', 'stop_lat': 'stop_lat', 'stop_lon': 'stop_lon', });
lyr_Hospital_5.set('fieldAliases', {'gid': 'gid', 'id': 'id', 'Hospital ': 'Hospital ', 'address': 'address', 'Zip Code': 'Zip Code', 'factype': 'factype', 'facname': 'facname', 'capacity': 'capacity', 'capname': 'capname', 'bcode': 'bcode', 'xcoord': 'xcoord', 'ycoord': 'ycoord', });
lyr_IntersectionNYAPLHSSS_6.set('fieldAliases', {'gid': 'gid', 'Street ': 'Street ', 'Zip Code': 'Zip Code', 'Library ': 'Library ', 'address': 'address', 'Hospital ': 'Hospital ', 'address_2': 'address_2', 'School ': 'School ', 'address_3': 'address_3', 'stop_id': 'stop_id', 'Subway St': 'Subway St', });
lyr_PrimaryResidentialZone_1.set('fieldImages', {'gid': 'Hidden', 'id': 'Hidden', 'zone': 'Hidden', });
lyr_Library_2.set('fieldImages', {'gid': 'Hidden', 'id': 'Hidden', 'Library': 'TextEdit', 'address': 'Hidden', 'Zip Code': 'TextEdit', 'factype': 'Hidden', 'facname': 'Hidden', 'capacity': 'Hidden', 'capname': 'Hidden', 'bcode': 'Hidden', 'xcoord': 'Hidden', 'ycoord': 'Hidden', });
lyr_School_3.set('fieldImages', {'gid': 'Hidden', 'id': 'Hidden', 'School': 'TextEdit', 'address': 'Hidden', 'Zip Code': 'TextEdit', 'factype': 'Hidden', 'facname': 'Hidden', 'capacity': 'Hidden', 'capname': 'Hidden', 'prek8_enr': 'Hidden', 'g912_enr': 'Hidden', 'sd': 'Hidden', 'bcode': 'Hidden', 'xcoord': 'Hidden', 'ycoord': 'Hidden', });
lyr_SubwayStation_4.set('fieldImages', {'gid': 'Hidden', 'stop_id': 'Hidden', 'Subway St': 'TextEdit', 'bcode': 'Hidden', 'stop_lat': 'Hidden', 'stop_lon': 'Hidden', });
lyr_Hospital_5.set('fieldImages', {'gid': 'Hidden', 'id': 'Hidden', 'Hospital ': 'TextEdit', 'address': 'Hidden', 'Zip Code': 'TextEdit', 'factype': 'Hidden', 'facname': 'Hidden', 'capacity': 'Hidden', 'capname': 'Hidden', 'bcode': 'Hidden', 'xcoord': 'Hidden', 'ycoord': 'Hidden', });
lyr_IntersectionNYAPLHSSS_6.set('fieldImages', {'gid': 'Hidden', 'Street ': 'TextEdit', 'Zip Code': 'TextEdit', 'Library ': 'TextEdit', 'address': 'Hidden', 'Hospital ': 'TextEdit', 'address_2': 'Hidden', 'School ': 'TextEdit', 'address_3': 'Hidden', 'stop_id': 'Hidden', 'Subway St': 'TextEdit', });
lyr_PrimaryResidentialZone_1.set('fieldLabels', {});
lyr_Library_2.set('fieldLabels', {'Library': 'header label', 'Zip Code': 'inline label', });
lyr_School_3.set('fieldLabels', {'School': 'header label', 'Zip Code': 'inline label', });
lyr_SubwayStation_4.set('fieldLabels', {'Subway St': 'header label', });
lyr_Hospital_5.set('fieldLabels', {'Hospital ': 'header label', 'Zip Code': 'inline label', });
lyr_IntersectionNYAPLHSSS_6.set('fieldLabels', {'Street ': 'header label', 'Zip Code': 'inline label', 'Library ': 'inline label', 'Hospital ': 'inline label', 'School ': 'inline label', 'Subway St': 'inline label', });
lyr_IntersectionNYAPLHSSS_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});