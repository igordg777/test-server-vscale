const express = require('express');
const app = express();

app.get('/', function (req, res) {
    res.send('Hello world');
})

app.listen(3005, console.log('сервер успешно запущен на порту 3005'))