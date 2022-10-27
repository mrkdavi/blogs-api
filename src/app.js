const express = require('express');
const { errorHandler } = require('./middlewares/errorHandler');
const createRouters = require('./routers');

// ...

const app = express();

app.use(express.json());

createRouters(app);

app.use(errorHandler);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
