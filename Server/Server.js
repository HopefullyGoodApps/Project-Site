var http = require("http");

var server = http.createServer(function(req, res){
	res.writeHead(200,{"Content-Type": "text/html"});
	res.end(`
		<!DOCTYPE html>
<html>
<head>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<title>Main Page</title>
</head>
<body>
	<div id="meniulateral"></div>
	<div id="meniusus"></div>
	<div id="restulpaginii"></div>
</body>
</html>

<style>
#meniulateral {
  background: #e6e6e6;
  height: 100%;
  width: 15%;
  position: fixed;
  top: 0;
  left: 0;
  /*display: none;*/
}

#meniusus {
  background: #282c34;
  height: 5%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0
}

#restulpaginii {
  background: #3b5596;
  height: 95%;
  width: 85%;
  position: fixed;
  top: 5%;
  left: 15%;
}

#pagina123 {
  position: absolute;
  top: 100px;
  left: 100px;
}

</style>
		`);

});

server.listen(3000);

console.log("Server listening on port 3000");