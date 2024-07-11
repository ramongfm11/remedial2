document.addEventListener('DOMContentLoaded', function () {

    const data = {
        personas: [
            { nombre: 'Juan', altura: 1.75, peso: 70 },
            { nombre: 'miguel', altura: 1.65, peso: 55 },
            { nombre: 'Pedro', altura: 1.80, peso: 85 },
            { nombre: 'franciasco', altura: 1.70, peso: 65 },
            { nombre: 'Aurelio', altura: 1.60, peso: 50 }
        ]
    };


    data.personas.forEach(persona => {
        persona.imc = calcularIMC(persona.altura, persona.peso);
    });


    const labels = data.personas.map(persona => persona.nombre);
    const values = data.personas.map(persona => persona.imc);


    const ctx = document.getElementById('imcChart').getContext('2d');


    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'IMC',
                data: values,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'IMC'
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: 'Personas'
                    }
                }
            }
        }
    });


    function calcularIMC(altura, peso) {
        return (peso / (altura ** 2)).toFixed(2);
    }
});




