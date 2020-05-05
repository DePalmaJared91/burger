var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var port = process.env.PORT || 3000;

var app = express();

//serve the content stattically from public directory

app.use(express.static(process.cwd() + 'public'));

app.use(bodyParser.urlencoded({ extended: false }));

//Override with POst ?_method=delete
app.use(methodOverride('_method'));
