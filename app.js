const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello World! I was supposed to change that but decided to just add to it instead.  Now im adding more.'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
