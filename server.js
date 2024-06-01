require('dotenv').config();
// Dependencies
const path = require('path');
const express = require('express');
const session = require('express-session')
const { create } = require('express-handlebars')
const routes = require('./controllers')
const helpers = require('./utils/helpers')
require('./models')

const sequelize = require('./config/connection')

// Create a new sequelize store
const SequelizeStore = require('connect-session-sequelize')(session.Store)

// Set up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

const hbs = create({ helpers })

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {},
  store: new SequelizeStore({
    db: sequelize
  })
}))

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')
app.set('views', './views')



app.use(express.json())
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  console.log('DB connected!')

  app.listen(PORT, () => {
    console.log('Server listening on: http://localhost:' + PORT);
  });
})