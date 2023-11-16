const http = require('http');
const jsonData = require("./jsonPackage")

const server = http.createServer((req,res)=>{
    if(req.url === "/"){
         res.write("<h1>This is my HTTP Home Server</h1>")
         res.end();
    }
    else if (req.url === "/product"){
        const jsonStore = JSON.stringify(jsonData);
        res.write(jsonStore)
        // res.write("<h1>This is my HTTP Product Server</h1>")
        res.end();
    }
    else if (req.url === "/student"){
        res.write("<h1>This is my HTTP Student Server</h1>")
        res.end();
    } else{
        res.write("<h1>404 Error</h1>")
    }
})

server.listen(5000, ()=>{
    console.log("server started....")
})