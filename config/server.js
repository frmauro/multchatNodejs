/* importar o modulo do framework express */
var express = require('express');

/* importar o modulo do consign */
var consign = require('consign');

/* importar o body-parser */
var bodyParser = require('body-parser');

/* importar o modulo do  express validator */
var expressValidator = require('express-validator');


/* iniciar o objeto express */
var app = express();


/* setar as variaveis 'view engine' e 'views' do express*/
app.set('view engine', 'ejs');
app.set('views', './app/views');

/*  configurar o midleware express.static */
app.use(express.static('./app/public'));

/*  configurar o midleware body-parser */
app.use(bodyParser.urlencoded({extended: true}));

/*  configurar o midleware express-validator */
app.use(expressValidator());

/*  efetua o autoload das rotas */
consign()
.include('app/routes')
.then('app/models')
.then('app/controllers')
.into(app);

/* exportar o objeto app */
module.exports = app;

