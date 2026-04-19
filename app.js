var express = require('express');

var app = express();//respond with "hello world" for requests that hit our root "/"
app.get('/',function (req, res){
<<<<<<< HEAD
res.send('welcome to node-appp....');
res.send('welcome to node-appp...');
>>>>>>> 6ca279e16a0abd0cc781b574c87f970a0a2760af
});// listen to port 3000 by default 
app.listen(process.env.PORT || 3000);

module.export = app; 
