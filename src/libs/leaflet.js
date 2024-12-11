import statesData from '../../assets/leaflet/world.geo.json';
document.addEventListener('DOMContentLoaded', function () {
    const areaMap = document.querySelector('#areaMap');
    if (null == areaMap) {
        return false;
    }
    const map = L.map('areaMap').setView([50, 0], 2);

    function style(feature) {
        return {
            fillColor: "#E0603C7D",
            fillOpacity: 0.7,
            weight: 1.1,
            color: '#EB6945',
        };
    }

    var geojson = L.geoJson(statesData, {
        style: style,
        onEachFeature: function (feature, layer) {
            layer.on({
                mouseover: highlightFeature,
                mouseout: resetHighlight,
                click: function (e) {
                    L.popup()
                        .setLatLng(e.latlng)
                        .setContent(`<b>${feature.properties.name}</b><br>${feature.properties.clients} Clients`)
                        .openOn(map);
                },
            });
        }
    }).addTo(map);

    var tooltip;
    function highlightFeature(e) {
        var layer = e.target;

        layer.setStyle({
            weight: 2,
            fillOpacity: 1,
            fillColor: '#EB6945'
        });

        layer.bringToFront();

        var latlng = layer.getBounds().getCenter();
        tooltip = L.tooltip({ permanent: false, direction: 'top', offset: [0, -10] })
            .setContent(layer.feature.properties.name + ': ' + layer.feature.properties.pop_est + ' Clients')
            .setLatLng(latlng)
            .addTo(map);
    }

    function resetHighlight(e) {
        geojson.resetStyle(e.target);
        tooltip?.remove();
    }
});