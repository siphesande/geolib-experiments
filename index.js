'use strict';

 var express = require('express'),
 	exphbs = require('express-handlebars'),
 	// mysql = require('mysql'),
 	// myConnection = require('express-myconnection'),
 	 bodyParser = require('body-parser');
 	// session = require('express-session'),	 

var app = express();

// var dbOptions = {
//       host: 'localhost',
//       user: 'root',
//       password: 'codex',
//       port: 3306,
//       database: 'Nels_db'
// };

//setup middleware
// app.use(myConnection(mysql, dbOptions, 'single'));
// parse application/x-www-form-urlencoded
 app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
// app.use(bodyParser.json())
// app.use(session({secret: "Haha haha", saveUninitialized : false, resave: true, cookie : {maxAge : 5*60000}}));
// app.set("xTers-powered-by", false);
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


app.use(express.static(__dirname + '/public'));


// app.use(myConnection(mysql, dbOptions, 'single'));
// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
// app.use(bodyParser.json())

app.get('/', function(req, res){
	res.render('home')
}); 
app.post('/api/issues', function(req,res){
	console.log(req.body);

	// the data is in req.body...
	//Sphe please write some to store to store this data in the database...

	//that cod

	/*
	res.send({
		issue_id : result.insertId
	});
*/
//NB
  var add = function (req, res, next) {
	req.getConnection(function(err, connection){
		if (err) return next(err);
		var input = JSON.parse(JSON.stringify(req.body));
		var data = {
      		description : input.description,
      		date :input.date,
            taxiAssociation_name :input.taxiAssociation_name
            Rank_name:input.Rank_name,
            start_location_id:input.
            end_location:input.

  	    };      
		connection.query('insert into Products set ?', data, function(err, results){
  		    if (err) return next(err);
  		    console.log("Error inserting : %s ",err );
});

app.post('/api/issues/:id', function(req,res){
	res.send("update an issue");
});

/*'/productCategories'is being used as our HTTP host name when you type eg this url name - url("http://localhost:2000/productCategories").end
 dont type "end" use text inside "quotes" then our function route  - "function res.render('productsCategories')" will work as an exception.
 for that matter "findProductCategories" function's results/output inside routes is being parsed as"findCatNames" will be rendered */

var port = process.env.port || 4000;

app.listen(port, function(){
	console.log('listening on *:' + port);
});
