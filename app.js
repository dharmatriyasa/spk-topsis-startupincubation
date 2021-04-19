const path = require('path');

const express = require('express');
const app = express();

// setting template engine
app.set('view engine', 'ejs');

// setting views folder to store file template engine
app.set('views', 'views');

// set bootstrap
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

const userRoutes = require('./routes/user');
const DSSRoutes = require('./routes/dss-app')

app.use(express.static(path.join(__dirname, 'public')));

app.use(userRoutes);
app.use(DSSRoutes);

app.listen(3000);