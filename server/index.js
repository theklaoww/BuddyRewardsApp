const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// })

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log (`server is running on port ${PORT}`));
