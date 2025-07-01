require('dotenv').config({ path: __dirname + '/../../../.env' });
let express = require('express');
let connectDB = require('./config/database');
let morgan = require ('morgan')
let routes = require ("./routes/routes.js")

let app = express();
let port = process.env.PORT || 8000;

// Middleware y rutas aquí
app.use(express.json());
app.use(morgan('dev'));
app.use(routes)

app.listen(port, () => {
  console.log('server listening on port', port);

  // Conectar a Mongo
  connectDB();
});
