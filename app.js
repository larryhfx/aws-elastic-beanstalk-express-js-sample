const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('This is Larrys first app with a pipeline, \n and subsequent change!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
