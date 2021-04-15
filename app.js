const path = require('path');

const express = require('express');
const app = express();

// setting template engine
app.set('view engine', 'ejs');

// setting views folder to store file template engine
app.set('views', 'views');

const userRoutes = require('./routes/user');

app.use(express.static(path.join(__dirname, 'public')));

app.use(userRoutes);

app.listen(3000);