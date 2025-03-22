let unitedStatesCenterCoordinates = [39.8283, -98.5795]
let zoomLevel = 3.4 //1 = whole world 20 = city blocks

let map = L.map('bridge-map').setView(unitedStatesCenterCoordinates, zoomLevel);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let bridgeIcon = L.icon({
    iconUrl: 'bridge2.png',
    iconSize: [32, 37],
    iconAnchor: [16, 37],
    popupAnchor: [0, -28]
});

let longestBridgeIcon = L.icon({
    iconUrl: 'FancyBridge.png',
    iconSize: [32, 37],
    iconAnchor: [16, 37],
    popupAnchor: [0, -28]
});

// Define the bridges array
bridges = [
    {"name": "Verrazzano-Narrows Bridge", "span": "1298.4 meters", "coordinates": [40.6066, -74.0447]},
    {"name": "Golden Gate Bridge", "span": "1280.2 meters", "coordinates": [37.8199, -122.4783]},
    {"name": "Mackinac Bridge", "span": "1158.0 meters", "coordinates": [45.8174, -84.7278]},
    {"name": "George Washington Bridge", "span": "1067.0 meters", "coordinates": [40.8517, -73.9527]},
    {"name": "Tacoma Narrows Bridge", "span": "853.44 meters", "coordinates": [47.2690, -122.5517]}
];

// Find the longest bridge
let longestBridge = bridges.reduce((maxBridge, currentBridge) => {
    return (parseFloat(currentBridge.span) > parseFloat(maxBridge.span)) ? currentBridge : maxBridge;
});

// Create markers using a conditional icon: the longest bridge gets a fancy icon.
bridges.forEach(function(bridge) {
    let markerText = `<b>${bridge.name}</b><br><span>Span Length: ${bridge.span}</span>`;
    let iconToUse = (bridge === longestBridge) ? longestBridgeIcon : bridgeIcon;
    L.marker(bridge.coordinates, { icon: iconToUse }).bindPopup(markerText).addTo(map);
});

