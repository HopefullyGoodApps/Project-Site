var http = require("http");
var fs   = require("fs");

var server = http.createServer(function(req,res){
	res.writeHead(200, {"Content-Type": "text/html"});

	var text = "salut";
	fs.readFile("../site/index.html", "UTF-8", function(err, output){
		if(err) throw err;
		res.end(output);
	})
});
server.listen(3000);
console.log("Server is listening on port 3000");