const mongoose=require("mongoose");

mongoose.Promise=Promise;

let con=mongoose.createConnection("mongodb://127.0.0.1/crawl");
module.exports.Movie=con.model("Movie",new mongoose.Schema({
    name:String,
    url:String
}));