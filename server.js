var express = require('express'),
    http = require('http');

var app = express();

//require('saml')(app);

app.all('/', secure);

http.createServer(app).listen(80, function () {
    console.log("demo saml service provider listening on port " + 80);
});

function secure(req,res,next){

  // Check session
  if(req.session.currentUser){
    next();
  }else{
    //app.settings.saml.startAuth(req, res);
    //saml.startAuth(req, res);
  }
}