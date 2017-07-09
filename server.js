const express=require("express");
const {Movie}=require("./model");
const path=require("path");

let app=express();

app.set("view engine","html");
app.set("views",path.resolve("views"));
app.engine("html",require("ejs").__express);

app.get("/",(req,res)=>{
    Movie.find({},(err,movies)=>{
        res.render("index",{movies});
    });
});

app.listen(3000);