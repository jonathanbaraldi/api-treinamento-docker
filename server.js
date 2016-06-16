var express = require('express'); 
var app = express();
var bodyParser = require('body-parser');

// Configurações
var port = 8080;

// Parsear o conteudo
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
  	extended: true
}));

// Configuração da requisição, cabeçalhos, etc. CORS
app.use(function(req, res, next) {
  	res.header("Access-Control-Allow-Origin", "*");
  	// Métodos que queremos permitir
  	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  	next();
});

// GET
app.get('/',function(req,res){
	var data = {
		"Data":"",
		"Ver" : "1.0"
	};
	data["Data"] = "API de Serviços do Jon - retorno em JSON";
	res.json(data);
	console.log(data);
});


// GET 
app.get('/html',function(req,res){
	
	var body = '<html>'
				+'	<head>'
				+'	<meta http-equiv="Content-Type" content="text/html" charset="UTF-8"/>'
				+'	</head>'
				+'	<body>'
				+'		<h1>API de Serviços do Jon - retorno em HTML</h1>'
				+'	    <form action="/upload" method="post">'
				+'	        <textarea name="text" rows="20" cols="60"></textarea>'
				+'	        <input type="submit" value="Submit text"/>'
				+'	    </form>'
				+'	</body>'
				+'	</html>';

	console.log(body);
	res.writeHead(200,{"Content-Type" : "text/html"});
	res.write(body);
	res.end();
});

// ===================================
app.listen(port,function(){
	console.log("Conectado e escutando na porta :8080");
});
