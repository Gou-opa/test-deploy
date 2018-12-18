var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var url = 'mongodb://192.168.1.16:27017/ezfood';
mongoose.url = url;
mongoose.connect(url);
mongoose.Promise = global.Promise;
var status = "Disconnected";
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    console.log("mongoose connected");
    status = "Connected";
});
console.log("index/mongohandler said welcome to mongoHandler");
/* GET home page. */
router.get('/', function(req, res, next) {
  
    res.render('index', { title: 'Express, Mongoose ' + status });
    
  
});

module.exports = router;
