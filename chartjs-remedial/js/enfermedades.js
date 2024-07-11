document.addEventListener('DOMContentLoaded', function () {

    const data = {
        diseases: [
            { name: 'cancer', deaths: 500 },
            { name: 'Obecidad', deaths: 300 },
            { name: 'accidentes viales', deaths: 800 }
        ]
    };


    const ctx = document.getElementById('enfermedadesChart').getContext('2d');
    const labels = data.diseases.map(disease => disease.name);
    const values = data.diseases.map(disease => disease.deaths);

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'causas de Muertes',
                data: values,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(255, 99, 132, 1)',
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
});

