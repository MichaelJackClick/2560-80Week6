    let canvas = document.querySelector('#soda-chart')
    let ctx = canvas.getContext('2d')

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