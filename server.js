const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Configuración de la conexión a MySQL
const db = mysql.createConnection({
    host: 'localhost',        // Cambia si tu servidor MySQL está en otro host
    user: 'tu_usuario',       // Tu nombre de usuario de MySQL
    password: 'tu_contraseña',// Tu contraseña de MySQL
    database: 'nombre_de_tu_base_de_datos' // Nombre de tu base de datos
});

// Conexión a la base de datos
db.connect(err => {
    if (err) {
        console.error('Error al conectar con la base de datos:', err);
        return;
    }
    console.log('Conectado a la base de datos MySQL');
});

// Rutas de ejemplo
app.get('/api/datos', (req, res) => {
    const sql = 'SELECT * FROM tu_tabla'; // Reemplaza 'tu_tabla' con el nombre de tu tabla
    db.query(sql, (err, result) => {
        if (err) {
            console.error('Error en la consulta:', err);
            res.status(500).send('Error en la consulta');
            return;
        }
        res.json(result);
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
