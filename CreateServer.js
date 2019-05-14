var http = require('http');

function onRequest(request,response){           // oncall  functions
    console.log("A user made a request" + request.url);
    response.writeHead(200,{"Context-Type" : "text/plain"});  // How's the Response type
    response.write("So,here is some data");     // response Answer
    response.end();  // response has ending
}

http.createServer(onRequest).listen(8888); //Create a server and listening the user to connect server
console.log("Server is now Running");       //msg will show when server is running
