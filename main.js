const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.resolve(__dirname, './src')));
app.use(express.static(path.resolve(__dirname, './web')));
app.get('*', function (request, response) {
  console.log('__dirname: ', __dirname);
  response.sendFile(path.resolve(__dirname, 'src/index.html'));
});

app.listen(5500, () => {
  console.log('started');
});
