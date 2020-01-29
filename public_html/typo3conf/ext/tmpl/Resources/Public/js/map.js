ymaps.ready(function () {
    var map = new ymaps.Map("map", {
        center: [55.76, 37.64],
        zoom: 10,
    });

    if (map) {
        ymaps.modules.require(['Placemark', 'Circle'], function (Placemark, Circle) {
            var placemark = new Placemark([55.37, 35.45]);
        });
    }
});

