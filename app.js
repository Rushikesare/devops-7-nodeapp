var express = require('express');

var app = express();//respond with "hello world" for requests that hit our root "/"
app.get('/',function (req, res){
res.send('welcome to node-app....');
});// listen to port 3000 by default 
app.listen(process.env.PORT || 3000);

module.export = app; 
