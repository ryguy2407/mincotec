mapboxgl.accessToken = 'pk.eyJ1Ijoicnlhbm53byIsImEiOiJja2VtbnlodW4wNWU1MnFsajQ1bTl2dnhvIn0.NMZP89hoKD1hVlPshKGY5g';
var mapboxClient = mapboxSdk({ accessToken: mapboxgl.accessToken });

let center;

mapboxClient.geocoding
    .forwardGeocode({
        query: 'Cardiff, New South Wales',
        autocomplete: false,
        limit: 1
    })
    .send()
    .then(function(response) {
        if (
            response &&
            response.body &&
            response.body.features &&
            response.body.features.length
        ) {
            var feature = response.body.features[0];

            var map = new mapboxgl.Map({
                container: 'map',
                style: 'mapbox://styles/ryannwo/ckemo757h2hf419o5ninz69gx',
                center: feature.center,
                zoom: 14
            });
            map.scrollZoom.disable();
            map.addControl(new mapboxgl.NavigationControl());

            map.on('touchstart', function(){
                map.dragging.disable();
            });

            map.on('load', function() {
                map.loadImage(
                    '/assets/img/cardiff-icon.png',
                    function(error, image) {
                        if (error) throw error;
                        map.addImage('micotech', image);
                        map.addSource('point', {
                            'type': 'geojson',
                            'data': {
                                'type': 'FeatureCollection',
                                'features': [
                                    {
                                        'type': 'Feature',
                                        'geometry': {
                                            'type': 'Point',
                                            'coordinates': feature.center
                                        }
                                    }
                                ]
                            }
                        });
                        map.addLayer({
                            'id': 'points',
                            'type': 'symbol',
                            'source': 'point',
                            'layout': {
                                'icon-image': 'micotech',
                                'icon-size': 0.5
                            }
                        });
                    }
                );
            });
        }
    });

mapboxClient.geocoding
    .forwardGeocode({
        query: 'Mackay Queensland',
        autocomplete: false,
        limit: 1
    })
    .send()
    .then(function(response) {
        if (
            response &&
            response.body &&
            response.body.features &&
            response.body.features.length
        ) {
            var feature = response.body.features[0];

            var map = new mapboxgl.Map({
                container: 'map2',
                style: 'mapbox://styles/ryannwo/ckemo757h2hf419o5ninz69gx',
                center: feature.center,
                zoom: 14
            });
            map.scrollZoom.disable();
            map.addControl(new mapboxgl.NavigationControl());

            map.on('touchstart', function(){
                map.dragging.disable();
            });

            map.on('load', function() {
                map.loadImage(
                    '/assets/img/mackay-icon.png',
                    function(error, image) {
                        if (error) throw error;
                        map.addImage('micotech', image);
                        map.addSource('point', {
                            'type': 'geojson',
                            'data': {
                                'type': 'FeatureCollection',
                                'features': [
                                    {
                                        'type': 'Feature',
                                        'geometry': {
                                            'type': 'Point',
                                            'coordinates': feature.center
                                        }
                                    }
                                ]
                            }
                        });
                        map.addLayer({
                            'id': 'points',
                            'type': 'symbol',
                            'source': 'point',
                            'layout': {
                                'icon-image': 'micotech',
                                'icon-size': 0.5
                            }
                        });
                    }
                );
            });
        }
    });