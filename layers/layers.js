ol.proj.proj4.register(proj4);
//ol.proj.get("").setExtent([606606.615511, 1205391.575936, 609598.839781, 1206926.485144]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_PhuLuc_BGD_2025_1 = new ol.format.GeoJSON();
var features_PhuLuc_BGD_2025_1 = format_PhuLuc_BGD_2025_1.readFeatures(json_PhuLuc_BGD_2025_1, 
            {dataProjection: 'EPSG:4326', featureProjection: ''});
var jsonSource_PhuLuc_BGD_2025_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PhuLuc_BGD_2025_1.addFeatures(features_PhuLuc_BGD_2025_1);
var lyr_PhuLuc_BGD_2025_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PhuLuc_BGD_2025_1, 
                style: style_PhuLuc_BGD_2025_1,
                popuplayertitle: 'PhuLuc_BGD_2025',
                interactive: true,
                title: '<img src="styles/legend/PhuLuc_BGD_2025_1.png" /> PhuLuc_BGD_2025'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_PhuLuc_BGD_2025_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_PhuLuc_BGD_2025_1];
lyr_PhuLuc_BGD_2025_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'BGD_2023': 'BGD_2023', 'TenDuong': 'TenDuong', 'Huyen': 'Huyen', 'LoaiDuong': 'LoaiDuong', 'SHAPE_Length': 'SHAPE_Length', 'SHAPE_Area': 'SHAPE_Area', 'Code': 'Mã nhận diện', 'TenDuong_BGD': 'TenDuong_BGD', 'DiemDau': 'DiemDau', 'DiemCuoi': 'DiemCuoi', 'STTDoan': 'STTDoan', });
lyr_PhuLuc_BGD_2025_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'BGD_2023': 'Range', 'TenDuong': 'TextEdit', 'Huyen': 'TextEdit', 'LoaiDuong': 'TextEdit', 'SHAPE_Length': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Code': 'TextEdit', 'TenDuong_BGD': 'TextEdit', 'DiemDau': 'TextEdit', 'DiemCuoi': 'TextEdit', 'STTDoan': 'TextEdit', });
lyr_PhuLuc_BGD_2025_1.set('fieldLabels', {'OBJECTID': 'hidden field', 'BGD_2023': 'hidden field', 'TenDuong': 'hidden field', 'Huyen': 'hidden field', 'LoaiDuong': 'hidden field', 'SHAPE_Length': 'hidden field', 'SHAPE_Area': 'hidden field', 'Code': 'hidden field', 'TenDuong_BGD': 'inline label - always visible', 'DiemDau': 'inline label - always visible', 'DiemCuoi': 'inline label - always visible', 'STTDoan': 'hidden field', });
lyr_PhuLuc_BGD_2025_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});