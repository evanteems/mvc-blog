// DEPENDENCIES START HERE!!!
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const helperz = require('./utils/helperz');
// Express start here!!!
const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connections');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sesh = {
    secret: 'Just to secretive',
    cookie: {
        expires: 7200000
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
};

app.use(session(sesh));

const hbs = exphbs.create({ helperz });
// Apps start here
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(require('./controllers/'));

sequelize.sync({ force: false })/TouchEvent(() => {
    app.listen(PORT, () => console.log('Beginning to Listen'));
});