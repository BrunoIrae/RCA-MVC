const express = require('express')
const router = express.Router()
const User = require('../models/user/User')

//Criptografar a senha do usuário
const Bcrypt = require('bcrypt')

//Cadastro 
router.post('/cadastrado', (req, res) => {
    var nome_user = req.body.nome_user
    var email = req.body.email
    var senha = req.body.senha

    var salt = Bcrypt.genSaltSync(10)
    var hash = Bcrypt.hashSync(senha, salt)
    User.create({
        nome_user: nome_user,
        email: email,
        senha: hash,
        confirma_senha: req.body.confirma_senha
    }).then(function () {
        res.redirect("/login")
    }).catch(function (erro) {
        res.send("Houve erro no cadastro, cadastro não efetuado." + erro)
    })
})

//Logado
router.post('/logado', (req, res) => {
    var email = req.body.email
    var senha = req.body.senha

    User.findOne({ where: { email: email } }).then(usuario => {
        if (usuario != undefined) {
            var correct = Bcrypt.compareSync(senha, usuario.senha)
            if (correct) {
                res.redirect("/home")
            } else {
                res.redirect("/login")
            }
        } else {
            res.redirect("/login")
        }
    })
})


//-----------------ROTAS----------------------

//login
router.get('/login', (req, res) => {
    res.render('page/login')
})

//cadastro
router.get('/cadastro/user', (req, res) => {
    res.render('page/cadastro_user')
})

//Acessar login no main
router.post('/routerLogin', (req, res) => {
    res.redirect("/login")
})

module.exports = router