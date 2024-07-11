const express = require('express');
const path = require('path');
const app = express();

// Middleware para servir archivos estáticos desde la carpeta raíz
app.use(express.static(__dirname));

// Ruta para servir la página principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3000; // Cambié 'port' a 'PORT' para evitar conflictos
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

