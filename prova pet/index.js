const express = require('express');
const app = express();

app.use(express.static(__dirname + '/views'));
app.listen(3000, function(){
  console.log("Servidor no ar - Porta: 3000!")
});

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));

var mysql = require('mysql'); 
var conexao = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "pets"
});
conexao.connect(function(err) {
  if (err) throw err;
  console.log("Banco de Dados Conectado");
});

const animais = require('./model/animais')

app.get('/', function(req, res){
	res.sendFile(__dirname + '/views/index.html');
});

app.get('/listaanimais', function(req, res){
    var a = new animais();

    a.listar(conexao, function(result){
      res.render('animais/lista.ejs', {animais: result});
    });
});

app.get('/formanimais', function(req, res){
	res.sendFile(__dirname + '/views/animais/formulario.html');
});

app.post('/processaranimais', function(req, res){
  var a = new animais();

  a.registro = req.body.registro;
  a.nome = req.body.nome;
  a.especie = req.body.especie;
  a.nascimento = req.body.nascimento;

  a.inserir(conexao);

    res.sendFile(__dirname + '/views/animais/resultado.html');
});