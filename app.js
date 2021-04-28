const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//database
const db = require('./util/database');

// setting template engine
app.set('view engine', 'ejs');

// setting views folder to store file template engine
app.set('views', 'views');

// set bootstrap
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

const userRoutes = require('./routes/user');
const DSSRoutes = require('./routes/dss-app');

// db.execute('SELECT * FROM alternatives')
//     .then(result => {
//         console.log(result[0].length);
//         result[1].forEach(data => {
//             console.log(data.name);
//         })
//     })
//     .catch(err => console.log(err));

app.use(express.static(path.join(__dirname, 'public')));

app.use(userRoutes);
app.use(DSSRoutes);

app.listen(3000);