import mysql from 'mysql2/promise';
import keys from './keys';

const pool = mysql.createPool(keys.database);

pool.getConnection()
    .then(connection => {
        console.log('DB is connected');
        pool.releaseConnection(connection); // No olvides liberar la conexión
    })
    .catch(err => {
        console.error('Error connecting to the database: ', err);
    });

export default pool;
