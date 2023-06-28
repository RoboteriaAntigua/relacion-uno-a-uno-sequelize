var url = require('url');

//---------------------- Crud tabla usuario -----------------------------//

//traigo el modelo
const modeloUsuario     = require('../models').Usuario;
const modeloDocumento   = require('../models').Documento;

//Create usuario (form get)
exports.formCreateUsuario = (req, res, next) => {
        res.render('../views/create_user.ejs', 
        {mensaje:'', title:'crear usuario'})      
}

//Procesar los datos (post)
/* seria facil hacer:
    modeloUsuario.create( req.body).then(//success)
    pero son dos tablas (relacion 1 a 1 y vienen del mismo form :S ) */

exports.createUsuario = (req, res, next) => {
    const nombre =req.body.Nombre;
    const email = req.body.Email;
    const pass = req.body.Pass;
    const numero = req.body.Numero;
    const direccion = req.body.Direccion;
    const tipo = req.body.Tipo;

    modeloUsuario.create(
        {
            "name":nombre,
            "email":email,
            "pass":pass,
        }
        ).then (
            (data) => { 
                const cadena = JSON.stringify(data);
                const new_user = JSON.parse(cadena);
                
                modeloDocumento.create(
                    {"numero":numero,
                    "direccion":direccion,
                    "tipo":tipo,
                    "usuarioId":new_user.id})
                res.redirect( '/home')
                }
                )  
        .catch((error) => {
            res.json({
                error: error
            });
        })
}


//Login (get)
exports.login_view = (req,res,next)=>{
    res.render('../views/login.ejs',{title:'Bienvenido'})
}

//La logica para el login
exports.login = (req, res, next) => {
    const email = req.body.Email;
    const pass = req.body.Pass;
    modeloUsuario.findAll(
        { where: { "email": email } })  
        .then((data) => {
            const cadena = JSON.stringify(data);
            const user = JSON.parse(cadena);
            if(user[0].email==email && user[0].pass == pass){
                res.redirect('/home');      
              }else {
                  res.send("incorrecto intente de nuevo")}
        })
        .catch((error) => {
            res.json({
                error: error
            });
        })       
}

//show Usuario
exports.showUsuario = (req, res, next) => {
    var parseada = url.parse(req.url,true);
	var query_obj = parseada.query; 	
	const email = query_obj.Email;
    modeloUsuario.findAll(
        { where: { "email": email } })  
        .then((data) => {
            const plano = JSON.stringify(data);
            const parse = JSON.parse(plano);
            let mostrar="";
            for(let x in parse[0]){
                mostrar= mostrar+" "+ parse[0][x];
            } 
            res.render('../views/mostrar-user.ejs',{title:email, usuario:mostrar})
        })
        .catch((error) => {
            res.json({
                error: error
            });
        })
}

//Editar usuario
exports.updateUsuario = (req, res, next) => {  
    var parseada = url.parse(req.url,true);
	var query_obj = parseada.query; 	
	const email = query_obj.email; 
    res.render('../views/update-user.ejs', {title:email})
    //La actualizacion en si:
        modeloUsuario.update(  
        req.body, { where: { "email": email } }  
    )
        .catch((error) => {
            res.json({
                error: error
            });
        }) 
}

//drop usuario
exports.dropUsuario = function (req, res, next) {
    console.log("el body:"+req.body.email);
    modeloUsuario.destroy(
        { where: { "email": req.body.email } })  //Reemplazar por traido de un form
        .then((data) => {
            res.send("borrado el usuario: " +req.body.email)
        })
        .catch((error) => {
            res.json({
                error: error
            });
        })
}