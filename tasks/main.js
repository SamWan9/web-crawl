const read=require("./read");
const write=require("./write");
const async=require("async");
const {Movie}=require("../model");

let url="http://top.baidu.com/buzz?b=26";
async.waterfall([
    callback=>{
        Movie.remove({},callback);
    },
    (data,callback)=>{
        read(url,callback);
    },
    (data,callback)=>{
        write(data,callback);
    },
],(err,result)=>{
    console.log("全部任务完成！");
});