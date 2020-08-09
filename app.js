const http = require('http');
const port = 3300;

const server = http.createServer(function(reg, res){
    res.write('Hello World');
    res.end();
});

server.listen(port, function(error){
    if (error) 
    {
        console.log("[ERROR]: ", error);
    }
    else
    {
        console.log(`server listo y escuchando en puerto ${port}`);
    }
});