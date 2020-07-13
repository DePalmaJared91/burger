var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
// var methodOverride = require('method-override');



var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");
app.use(routes);

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});

//serve the content stattically from public directory
// app.use(express.static(process.cwd() + 'public'));
//Override with POst ?_method=delete
// app.use(methodOverride('_method'));
