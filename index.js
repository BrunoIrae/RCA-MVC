const express = require('express')
const app = express()
const PORT = 3000;
const bodyParser = require('body-parser')

//Conecções Banco de dados
const Pets = require('./models/cadastro_pet/Pets')
const User = require('./models/user/User');

//Referência de indice para páginas
const PetsController = require('./controllers/petsController')
const UsersController = require('./controllers/userController')

//INSTANCIAS

//Executando servidor
app.listen(PORT)

//Configurando body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//app.use(express.json())

//Configurando EJS
app.set('view engine', 'ejs')
app.set('view engine h', 'handlebars')

//Configurando arquivos static
app.use(express.static('public'))

//Passa a referência da pagina para funções pet
app.use('/', PetsController)
//Passa a referência da pagina para funções user
app.use('/', UsersController)

//Rota principal
app.get('/', (req, res) => {
    res.render('index')
})

//main
app.get('/mainTest', (req, res) => {
    res.render('page/mainTest')
})

//Test Cadastro
app.get('/voluntariar', (req, res) => {
    res.render('page/voluntariar')
})

//Test Cadastro
app.get('/adocao', (req, res) => {
    res.render('page/adocao')
})
//Test Cadastro
app.get('/main', (req, res) => {
    res.render('page/main')
})

//Test Cadastro
app.get('/home', (req, res) => {
    res.render('page/home')
})

//Test Cadastro
app.get('/edit', (req, res) => {
    res.render('page/edit')
})

//SERVIDOR
app.listen((PORT, () => {
    console.log('Servior online!')
}))


