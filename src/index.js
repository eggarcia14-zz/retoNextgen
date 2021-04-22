const express = require('express'),
      path = require('path');
          
const app = express();

// importing routes
const authRoutes = require('./routes/authRoutes');

// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json());

app.use(express.urlencoded({extended: false}));

// routes
app.use('/', authRoutes);

// static files
app.use(express.static(path.join(__dirname, 'public')));

// starting the server
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});
