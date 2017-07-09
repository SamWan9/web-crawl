const {Movie}=require("../model");

module.exports=(movies,callback)=>{
    Movie.create(movies).then(callback);
};