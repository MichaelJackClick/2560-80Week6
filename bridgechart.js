let canvas = document.querySelector('#bridge-chart')
let ctx = canvas.getContext('2d')

// Array of bridges with names and spans
let bridges = [
    {"name": "Verrazzano-Narrows Bridge", "span": "1298.4 meters", "coordinates": [40.6066, -74.0447]},
    {"name": "Golden Gate Bridge", "span": "1280.2 meters", "coordinates": [37.8199, -122.4783]},
    {"name": "Mackinac Bridge", "span": "1158.0 meters", "coordinates": [45.8174, -84.7278]},
    {"name": "George Washington Bridge", "span": "1067.0 meters", "coordinates": [40.8517, -73.9527]},
    {"name": "Tacoma Narrows Bridge", "span": "853.44 meters", "coordinates": [47.2690, -122.5517]}
];

// makes arrays for chart labels, data, and colors
let labels = [];
let spans = [];
let backgroundColors = [];
let defaultColors = ['red', 'blue', 'purple', 'green', 'yellow'];

bridges.forEach(function(bridge, index) {
    labels.push(bridge.name);
    // Convert the span to a numeric value by parsing the float
    spans.push(parseFloat(bridge.span));
    // Use a color from the defaultColors array
    backgroundColors.push(defaultColors[index % defaultColors.length]);
});

// mkaes the bar chart using Chart.js
let chart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: 'Bridge span (meters)',
            data: spans,
            backgroundColor: backgroundColors
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});