var mongoose = require('mongoose');

var url = 'mongodb://chitbi.ddns.net:27017/ezfood';
mongoose.url = url;

mongoose.connect(url);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    console.log("mongoose connected");
});
console.log("mongohandler said welcome to mongoHandler");