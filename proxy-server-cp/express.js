var express = require('express')
var path = require('path');
var app = express();
var request = require('request');


app.use('/', express.static(path.join(__dirname, 'client')))

// pipe sams stuff
app.post('/api/search', (req, res) => {
  var samsPort = 'http://localhost:3001/api/search'
  req.pipe(request(samsPort)).pipe(res);
})

// pipe jj's stuff

app.get('/api/product/:id', (req, res) => {
  var id = req.params.id;
  var jjsPort = `http://localhost:3003${req.url}`
  request(jjsPort).pipe(res);
});


// pipe my stuff
app.get('/products-cp/:id', (req, res) => {
  var myPort = `http://localhost:3002${req.url}`
  request(myPort).pipe(res);
})

app.listen(3000, function () {
  console.log('CORS-enabled web server listening on port 3000')
})
