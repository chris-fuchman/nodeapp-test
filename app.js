var express = require('express');
var app = express();
//app.set('view options', { layout:'views/layout.ejs' });

app.get('/',function(req,res){
	res.render('layout.ejs',{
		'title':'hello',
		'body':''
	});
});

app.get('/about',function(req,res){
        res.render('layout.ejs',{
                'title':'aboit',
		'body':'about us...'
        });
});

app.get('/*',function(req,res){
        res.status(404).render('layout.ejs',{
                'title':'404',
		'body':'404...'
        });
});

console.log('ok');
app.listen(3000);

