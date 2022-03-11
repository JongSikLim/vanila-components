const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.resolve(__dirname, './src')))
app.get('*', function (request, response) {
    response.sendFile(path.resolve(__dirname, 'src/index.html'));
});

app.listen(5500, () => {
    console.log('started')
});
