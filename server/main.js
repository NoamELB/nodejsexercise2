// External dependencies
var express 		= require('express'),
	http 			= require('http'),
	ctrl			= require('./ctrl'),
	index			= "index";
	
__dirname = __dirname.slice(0, -7); // slice the /server folder prefix

// Express dependencies
var app = express();
app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/app'));
app.use('/assets', express.static(__dirname + '/assets')); // HTML 5 mode fixes
app.use(/\/(?!(data)).*/, function(req, res) { // everything that not '/data' will go through the index.html
	res.sendFile('app/' + index + '.html', { root: __dirname });
});

// Set up server
app.listen(app.get('port'), function() {
	console.log("\t+*+*+ Server up on localhost:" + app.get('port') + " +*+*+");

	app.get('/data/:num', ctrl.MyCtrl);
});

