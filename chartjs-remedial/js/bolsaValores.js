document.addEventListener('DOMContentLoaded', function () {
    const data = {
        stockData: [
            { company: 'JPN', price: 100 },
            { company: 'EU/UK', price: 120 },
            { company: 'SPX150', price: 90 },
            { company: 'NVID', price: 110 },
            { company: 'DLLS', price: 130 }
        ]
    };

    const ctx = document.getElementById('bolsaValoresChart').getContext('2d');

    const companies = data.stockData.map(stock => stock.company);
    const prices = data.stockData.map(stock => stock.price);


    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: companies,
            datasets: [{
                label: 'Precio de las acciones',
                data: prices,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    console.log('Datos de la bolsa de valores:', data.stockData);
});
