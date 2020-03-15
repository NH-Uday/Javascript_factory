var connect = require('connect');
var http = require('http');

var app = connect();

/*function doFirst(request, responce, next)
{
	console.log("Bacon");
	next();
}
*/
/*function doSecond(request, responce, next)
{
	console.log("Tuna");
	next();
}
*/
function profile(request, responce)
{
	console.log('User requested profile');
}
function forum(request, responce)
{
	console.log('User requested Forumm');
}

//app.use(doFirst);
//app.use(doSecond);
app.use('./profile',profile);
app.use('./forum',forum);

http.createServer(app).listen(8888)
console.log("Server is running.....");