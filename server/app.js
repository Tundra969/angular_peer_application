var express = require('express');
var app = express();
var path = require('path');
var pg = require('pg');

var connectionString = process.env.DATABASE_URL || "postgres://localhost:5432/wk5_angular";

app.set("port", process.env.PORT || 5000);

app.get('/info', function(req,res){
    pg.connect(connectionString, function(err, client){
        client.query("SELECT * FROM info ",
            function (err,result){
                if (err) {
                    console.log("Error retrieving data: ", err);
                    res.send(false);
                }
                console.log(result);
                res.send(result);
            }
        )
    })
});

app.get("/*", function(req,res){
    var file = req.params[0] || "assets/views/index.html";
    res.sendFile(path.join(__dirname, "./public", file))
});

app.listen(app.get("port"), function(req,res){
    console.log("Listening on port: " + app.get("port"));
});

module.exports = app;