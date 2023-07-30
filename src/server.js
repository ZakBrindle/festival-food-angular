const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('./dist/festival-food-angular'));

app.get('/*', (req, res) =>
  res.sendFile('index.html', {root: 'dist/festival-food-angular/'}),
);

app.listen(process.env.PORT || 8080);
