const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send('¡Hola, mundo! Esta es una aplicación web sencilla.');
});

app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
