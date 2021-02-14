'use strict';
const path = require('path');
const express = require('express');

// Constants
const PORT = 8181;
const HOST = '127.0.0.1';

const server = express();
server.use(express.static(path.join(__dirname, './public/')));

server.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, './public/', 'index.html'));
});

server.listen(PORT);
console.log(`Running on http://${HOST}:${PORT}`);