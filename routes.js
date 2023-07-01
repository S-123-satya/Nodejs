const fs=require('fs');

const routesHandlers=(req,res)=>{
    const url=req.url;
        if(url==='/'){
            fs.readFile('satya.txt','utf-8',(err,data)=>{
                if(err){
                    console.log(err);
                }
                if(data===undefined)
                    data='';
                res.write(`<html>`);
                res.write(
                    `<body>${data}<form action='/home' method='post'><input type='text' name='message'><button type='submit'>send</button></form></body>`
                );
                res.write(`</html>`);
                res.end();
            });
            
        }
        if(url==='/home'){
            const body=[];
            req.on('data',(chunk)=>{
                body.push(chunk);
            });
            return req.on('end',()=>{
                const parsedata=Buffer.concat(body).toString();
                const result = parsedata.split('=')[1];
                fs.writeFileSync('satya.txt',result);
                res.statusCode=302;
                res.setHeader('Location','/');
                return res.end();
            });
        }
    };

module.exports=routesHandlers;