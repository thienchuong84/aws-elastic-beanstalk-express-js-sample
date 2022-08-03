const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hoc AWS CI CD - 31/07/2022 v1'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
