const express = require('express');
const mysql = require('mysql2/promise');
const app = express();

app.use(express.json());

const pool = mysql.createPool({
    host: 'db_public_ip',
    user: 'root',
    password: 'password',
    database: 'on_air'
});

app.get('/api/account', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM account');
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('DB error');
    }
});

app.listen(3001, () => {
    console.log('API running on port 3001');
});
