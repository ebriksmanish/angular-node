const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
const user = require('./routes/user');
const bodyParser = require('body-parser');
// getting-started.js
const mongoose = require('mongoose');
const config = require('./config/database');
mongoose.connect(config.database);

// getting-started.js
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('// we are connected!');
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
// ...
app.use('/api', user);
app.get('/', (req, res) => res.send('Hello World!'));
app.use('/static', express.static(path.join(__dirname, 'public')));

app.listen(port, () => console.log('Example app listening on port') + port);