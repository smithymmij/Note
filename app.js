//carregar as variáveis de ambiente do arquivo .env
require('dotenv').config();

//importando o pacote Express
const express = require('express');

//importando o pacote ExpressLayouts
const expressLayouts = require('express-ejs-layouts');

//aplicativo express
const app = express();
const port = 7000 || process.env.PORT;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

//o Express irá procurar arquivos ESTÁTICOS dentro do diretório "public"
app.use(express.static('public'));

//definição de layout padrão
app.use(expressLayouts);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

//rota para o aplicativo
app.get('/', function(req, res){
    res.render('index');
});

//inicia o servidor Express para ouvir as solicitações HTTP em uma porta específica
app.listen(port, () => {
    console.log(`App iniciado na porta ${port}`);
})