let metroAreaCenterCoordinates = [44.96, -93.2]
let zoomLevel = 9 //1 = whole world 20 = city blocks

let map = L.map('college-map').setView(metroAreaCenterCoordinates, zoomLevel);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);