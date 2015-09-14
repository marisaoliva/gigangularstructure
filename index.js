var express = require('express');
var app = express();
var https = require('https');
var http = require('http');
var pem = require('pem');
var CONFIG  = require('./parameters.json');

var dirProject = CONFIG[CONFIG.server].directory;
var PORT = CONFIG[CONFIG.server].port;

express.static.mime.define({'application/x-font-woff': ['woff']});
express.static.mime.define({'application/x-font-ttf': ['ttf']});

app.use('/app', express.static(__dirname + '/'+dirProject+'/app'));
app.use('/assets', express.static(__dirname + '/'+dirProject+'/assets'));

app.all('/*', function(req, res) {
    res.sendfile('index.html', { root: __dirname + '/'+dirProject+'/' });
});


if (CONFIG.server == "local-https") {
    pem.createCertificate({days:1, selfSigned:true}, function(err, keys){
        https.createServer({key: keys.serviceKey, cert: keys.certificate}, app).listen(PORT);
        console.log('server listen'+ PORT);
    });
}
else {
    http.createServer(app).listen(PORT);
    console.log('server listen '+ PORT);
}
