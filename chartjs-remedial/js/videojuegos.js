document.addEventListener('DOMContentLoaded', function () {
    const apiKey = '5dc9a69075904827af7c7507887af7b6';
    const url = `https://api.rawg.io/api/games?key=${apiKey}&dates=2019-09-01,2019-09-30&platforms=18,1,7`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data && data.results) {
                const topGames = data.results.slice(0, 5); // Obtener los 5 primeros juegos

                const gameNames = topGames.map(game => game.name);
                const gameRatings = topGames.map(game => game.rating);

                const ctx = document.getElementById('videojuegosChart').getContext('2d');

                new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: gameNames,
                        datasets: [{
                            label: 'Valoraciones de Juegos',
                            data: gameRatings,
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
            } else {
                console.error('Error fetching game data or no results found');
            }
        })
        .catch(error => console.error('Error fetching game data:', error));
});



