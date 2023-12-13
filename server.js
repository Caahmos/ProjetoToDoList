require('dotenv').config();

const path = require('node:path');
const moongose = require('mongoose');
const express = require('express');
const flash = require('connect-flash');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const { middleware } = require('./src/middlewares/middlewares')
const route = require('./routes');
const app = express();

moongose.connect(process.env.CONNECTIONSTRING)
.then(() => {
    console.log('Banco de dados conectado!');
    app.emit('Pronto');
})
.catch(err => {
    console.log(err);
});


app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'src', 'views'));

const sessionConfig = session({
    secret: 'chavesupersecretajsisajdl',
    store: MongoStore.create({mongoUrl: process.env.CONNECTIONSTRING}),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});

app.use(sessionConfig);
app.use(express.urlencoded({urlencoded: true}));
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(flash());
app.use(middleware);
app.use(route);

app.on('Pronto', () => {
    app.listen(3000, () => {
        console.log('O server está rodando!');
        console.log('http://localhost:3000');
    });
});