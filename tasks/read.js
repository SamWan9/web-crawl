const request=require("request");
const iconv=require("iconv-lite");
const cheerio=require("cheerio");

module.exports=(url,callback)=>{
    request({url,encoding: null},(err,res,body)=>{
        if(!err && res.statusCode===200){
            body=iconv.decode(body,"gbk");
            let $ = cheerio.load(body);
            let movies=[];
            $(".keyword a.list-title").each((index,item)=>{
                let $this=$(item);
                let movie={
                    name: $this.text(),
                    url: $this.attr("href")
                };
                console.log(`读到电影：${movie.name}`);
                movies.push(movie);
            });
            callback(err,movies);
        }
    });
};

