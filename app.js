var cookieSession = require('cookie-session')
var express = require('express')
var bodyParser = require('body-parser'); // Charge le middleware de gestion des paramètres
var urlencodedParser = bodyParser.urlencoded({ extended: false });


var app = express()


/* On utilise les sessions */
app.use(session({ secret: 'todotopsecret' }))


app.get('/todo', function(req, res) {
    res.render('page.ejs')
});
app.post('/todo/ajouter/', function(req, res) {});
app.delete('/todo/supprimer/:id', function(req, res) {});