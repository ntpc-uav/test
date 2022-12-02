var wms_layers = [];

var lyr_1_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "1",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/1_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13513835.666713, 2868433.802426, 13514658.968518, 2868957.119293]
                            })
                        });

lyr_1_0.setVisible(true);
var layersList = [lyr_1_0];
