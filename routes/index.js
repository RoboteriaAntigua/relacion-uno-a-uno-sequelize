var express = require('express');
var router = express.Router();

//El controlador para separar la logica de negocios de las rutas
//Aplicando el primer principio de SOLID (Single responsability)
const usuarioController = require('../controllers/Usuario.controller');

//Home
router.get('/home', (req,res,next)=>{
  res.render('index', {title:'Crud que establece relacion 1:1 entre dos tablas random', mensaje:""})
})

//Create Usuario y Documento (relacion 1:1) 
router.get('/crear-usuario', usuarioController.formCreateUsuario)
router.post('/crear-usuario', usuarioController.createUsuario)

//Read Usuario y Documento (relacion 1:1) 
router.get('/mostrar-usuario', usuarioController.showUsuario)

//Update Usuario y Documento (relacion 1:1) 
router.get('/actualizar-usuario',usuarioController.updateUsuario)
router.post('/actualizar-usuario', usuarioController.updateUsuario)

//drop Usuario y Documento (relacion 1:1) 
router.post('/borrar-usuario',usuarioController.dropUsuario)

//login get
router.get('/',usuarioController.login_view);
router.post('/',usuarioController.login)

module.exports = router;


