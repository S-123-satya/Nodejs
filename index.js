const http=require('http');

const server=http.createServer((req,res)=>{
    const url=req.url;
    if(url=='/home')
        return res.end('welcome to home page');
    else if(url=='/about')
        return res.end('welcome to about us');
    else if(url=='/node')
        return res.end('welcome to node server');
    return res.end(`Error 404, page not found`);
});
server.listen(4000,'127.0.0.1',()=>{
    console.log('listening on port 4000');
});
