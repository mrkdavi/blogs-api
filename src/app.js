const express = require('express');
const createRouters = require('./routers');

// ...

const app = express();

app.use(express.json());

createRouters(app);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
