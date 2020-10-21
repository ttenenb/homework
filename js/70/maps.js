/* global google*/
/*jshint -W098*/

function initMap() {

    'use strict';
    const drawingManager = new google.maps.drawing.DrawingManager();
    let map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 41.457, lng: -81.502 },
        zoom: 8
    });

    new google.maps.Marker({
        position: { lat: 41.457, lng: -81.502 },
        map: map,
        title: 'Cleveland'
    });

    drawingManager.setMap(map);
    const markers = JSON.parse(localStorage.getItem('markers')) || [];
    const circles = JSON.parse(localStorage.getItem('circles')) || [];
    const rectangles = JSON.parse(localStorage.getItem('rectangles')) || [];
    const polylines = JSON.parse(localStorage.getItem('polylines')) || [];
    const polygons = JSON.parse(localStorage.getItem('polygons')) || [];

    google.maps.event.addListener(drawingManager, 'overlaycomplete', event => {

        console.log(event);

        const test = event.type === 'marker' ? markers.push(event.overlay.position) + (localStorage.markers = JSON.stringify(markers))
            : event.type === 'circle' ? circles.push({ center: event.overlay.center, radius: event.overlay.radius }) + (localStorage.circles = JSON.stringify(circles))
                : event.type === 'rectangle' ? rectangles.push(event.overlay.bounds) + (localStorage.rectangles = JSON.stringify(rectangles))
                    : event.type === 'polyline' ? polylines.push(event.overlay.getPath().getArray()) + (localStorage.polylines = JSON.stringify(polylines))
                        : event.type === 'polygon' ? polygons.push(event.overlay.getPath().getArray()) + (localStorage.polygons = JSON.stringify(polygons))
                            : undefined;
    });

    // google.maps.event.addListener(drawingManager, 'polylinecomplete', line => {
    //     polylines.push(line.getPath().getArray());
    //     localStorage.polylines = JSON.stringify(polylines);
    // });


    // google.maps.event.addListener(drawingManager, 'polygoncomplete', line => {
    //     polygons.push(line.getPath().getArray());
    //     localStorage.polygons= JSON.stringify(polygons);
    // });
    if (localStorage.markers) {
        let m = JSON.parse(localStorage.markers);

        m.forEach(pos => {
            new google.maps.Marker({
                position: pos,
                map: map,
                animation: google.maps.Animation.DROP
            });
        });
    }

    $('#clear').click(() => {
        localStorage.clear();
        document.location.reload();
    });

    if (localStorage.rectangles) {
        const r = JSON.parse(localStorage.rectangles);
        r.forEach(bounds => {
            new google.maps.Rectangle({
                bounds: bounds,
                map: map,
                animation: google.maps.Animation.DROP
            });
        });
    }
    if (localStorage.circles) {

        const c = JSON.parse(localStorage.circles);
        c.forEach(ci => {
            new google.maps.Circle({
                radius: ci.radius,
                center: ci.center,
                map: map,
                animation: google.maps.Animation.DROP
            });
        });
    }

    if (localStorage.polylines) {

        const pl = JSON.parse(localStorage.polylines);

        pl.forEach(path => {
            new google.maps.Polyline({
                path: path,
                map: map,
                animation: google.maps.Animation.DROP
            });
        });
    }

    if (localStorage.polygons) {
        const pg = JSON.parse(localStorage.polygons);

        pg.forEach(path => {
            new google.maps.Polygon({
                path: path,
                map: map,
                animation: google.maps.Animation.DROP
            });
        });
    }
}

