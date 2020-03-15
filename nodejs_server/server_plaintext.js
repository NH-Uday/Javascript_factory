var http = require('http');
function onRequest(request, responce)
{
	console.log("A user is online"+request.url);
	responce.writeHead (200, {"Context-Type": "text/plain"});
	responce.write("Here is the data");
	responce.end();
}
http.createServer(onRequest).listen(8800)
console.log("Server is running.....");