var express = require('express');
var app = express();

// all files that need 'env' variable need this line:
// (make env global to server.js)
require('dotenv').config();

var request = require('request');

app.get('/giphy', function(req, res){
    console.log('in the giphy route');

    // not needed if no header, since GET is inferred.
    // var options {
    //     url: 'https:// ',
    //     method: 'GET',
        
    // };
    var url = 'https://api.giphy.com/v1/gifs/search?api_key=iffydHwQsYZmNA4JmRNpn46K8F3P7NNb&q=rubber duckies&limit=1&offset=0&rating=G&lang=en';
    request(url, function(error, response, body) {
        console.log('Error: ', error);
        console.log('statusCode: ', response && response.statusCode);  // print the response status code if resp received.
        console.log('body:', body); // Print the HTML for the Google homepage.
        // send entire body or just parts
        res.status(200).send(JSON.parse(body));        
    });
    
});

app.listen(3000, function(req, res){
    console.log('on port: 3000');
});