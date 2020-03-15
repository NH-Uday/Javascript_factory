var http = require('http');
var fs = require('fs');

function send404Responce(responce){
	responce.writeHead(404, {"Content-Type": "text/plain"});
	responce.write("Error 404: Page not found");
	responce.end();
}
function onRequest(request, responce)
{
	if (request.method == 'GET' && request.url == '/'){
		responce.writeHead(200, {"Content-Type": "text/html"});
		fs.createReadStream("./index.html").pipe(responce);
	}else{
		 send404Responce(responce);
	}
}
http.createServer(onRequest).listen(8888)
console.log("Server is running.....");