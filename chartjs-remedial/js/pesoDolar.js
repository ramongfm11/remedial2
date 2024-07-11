document.addEventListener('DOMContentLoaded', function () {
    const url = 'https://v6.exchangerate-api.com/v6/285ba62cbf0358663d6f5fef/latest/USD';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data && data.conversion_rates && data.conversion_rates.MXN) {
                const ctx = document.getElementById('pesoDolarChart').getContext('2d');
                const labels = Object.keys(data.conversion_rates);
                const values = Object.values(data.conversion_rates);

                new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: labels,
                        datasets: [{
                            label: 'Peso/Dólar',
                            data: values,
                            borderColor: 'rgba(75, 192, 192, 1)',
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
            } else {
                console.error('Error fetching data or no conversion rates found');
            }
        })
        .catch(error => console.error('Error fetching data:', error));
});
