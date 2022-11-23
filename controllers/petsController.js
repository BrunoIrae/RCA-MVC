const express = require('express')
const router = express.Router()
const Pets = require('../models/cadastro_pet/Pets')


//Lista todos os pets (Guarda todos os pets em uma variável e imprime)
router.get('/adotar', async (req, res) => {
    const allPets = await Pets.findAll()
    return res.render('page/adotar', { Pets: allPets })
})

//cadastro 
router.post('/pet/save', (req, res) => {
    var nome_pet = req.body.nome_pet
    var sexo_pet = req.body.sexo_pet
    var data_resgate = req.body.data_resgate
    var comentario = req.body.comentario

    Pets.create({
        nome_pet: nome_pet,
        sexo_pet: sexo_pet,
        data_resgate: data_resgate,
        comentario: comentario,
    }).then(function () {
        res.redirect('/adotar')
    }).catch(function (erro) {
        res.send("Houve erro no cadastro, cadastro não efetuado." + erro)
    })
})



//Salva o pet no banco de dados
router.post('/cadastro/pet', (req, res) => {
    var nome_pet = req.body.nome_pet
    var sexo_pet = req.body.sexo_pet
    var data_resgate = req.body.data_resgate
    var comentario = req.body.comentario

    Pets.create({
        nome_pet: nome_pet,
        sexo_pet: sexo_pet,
        data_resgate: data_resgate,
        comentario: comentario,
    }).then(function () {
        res.redirect('/adotar')
    }).catch(function (erro) {
        res.send("Houve erro no cadastro, cadastro não efetuado." + erro)
    })
})

//Atualizar Pet
router.post('/pet/update', (req, res) => {
    var id= req.body.id
    var nome_pet = req.body.nome_pet
    var sexo_pet = req.body.sexo_pet
    var data_resgate = req.body.data_resgate
    var comentario = req.body.comentario

    Pets.update({
        nome_pet: nome_pet,
        sexo_pet: sexo_pet,
        data_resgate: data_resgate,
        comentario: comentario,
    },{
        where: {id : id}
    }).then(function () {
        res.redirect('/adotar')
    }).catch(function (erro) {
        res.send("Houve erro no cadastro, cadastro não efetuado." + erro)
    })
})

router.get('/pet/edit/:id', (req, res) => {
    var id = req.params.id
    
    Pets.findOne({
        where: { id : id }
    }).then(pet => {
        
        res.render('page/edit', {pet : pet})
    })

})

router.get('/pet/adotar/:id', (req, res) => {
    var id = req.params.id
    
    Pets.destroy({
        where: { id : id }
    }).then(() => {
        res.redirect('/adotar')
    })

})

//-----------------ROTAS----------------------

//Cadastro pet
router.get('/cadastro/pet', (req, res) => {
    res.render('page/cadastro_pet')
})

//main
router.get('/adotar', (req, res) => {
    res.render('page/adotar')
})

module.exports = router