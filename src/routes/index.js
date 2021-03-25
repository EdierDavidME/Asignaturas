const { Router } = require('express');
const router = Router();
// require('./helpers/helper');


router.get('/', (req, res) => {
    res.render('index');
});

router.get('/registro', (req, res) => {
    res.render('registro');
});

router.post('/registro', (req, res) => {
    res.render('existe', {
        user: {
            nombre: req.body.nombre,
            // rol: req.body.rol,
            documento: req.body.cc,
            telefono: req.body.tel,
            correo: req.body.correo
        }
    });
});

router.post('/login', (req, res) => {
    res.render('login', {
        datos: {
            nombre: req.body.nombre,
            cedula: parseInt(req.body.password)
        }
    });
});

router.get('/login', (req, res) => {
    res.render('login');
});

router.get('/cursos', (req, res) => {
    res.render('cursos');
});

module.exports = router;