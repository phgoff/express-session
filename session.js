var express = require('express');
var app = express();
var session = require('express-session');

app.use(session({ secret : 'keyboard cat',
				cookie : { maxAge: 60000},
				resave: false,
				saveUninitialized:false}))

app.use((req,res,next)=>{
	var sess = req.session
	if(sess.view){
		sess.view++;
	} else {
		sess.views = 1
	}
	next();
	console.log("View: " + sess.views)
})

app.get('/',(req,res)=>res.send('views: ' + req.session.views));
app.listen(8000);
