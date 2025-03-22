    let canvas = document.querySelector('#soda-chart')
    let ctx = canvas.getContext('2d')
//Chart Creation:
    //    - Creates a new bar chart using Chart.js.
    //    - The 'data' block defines:
    //      • Labels for each soda type that appear along the x-axis.
    //      • A dataset containing the vote counts and a corresponding background color for each bar.
    let chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Coke,', 'Pepsi', 'sprite', 'Either', 'Neither'],
            datasets: [ {
                label: 'Number of votes',
                data: [18, 14, 10, 7, 10],
                backgroundColor: ['red', 'blue', 'purple', 'green', 'yellow']
            } ]
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
    })