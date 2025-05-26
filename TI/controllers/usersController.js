let db = require("../database/models");
let bcrypt = require ('bcryptjs');

let usersController = {
    show: function(req, res) {
        res.render('register.ejs')
    },

    create: function(req, res){
        const email = req.body.mail
        const password = req.body.contrasena
        const fecha = req.body.fecha
        const dni = req.body.dni
        const foto = req.body.foto
        db.User.findOne({where:{email}})
        .then(function(resultado)){
            if (resultado){
                return res.send('el usuario ya existe')
            }
            else if(resultado == null){
                return res.send('Completa el campo')
            }
            else if (password.length < 3){
                return res.send('Contra tiene que tener mas de 3 caracteres')
            }
            else{
                return res.redirect(/)
            }
        }

    
        let passwordEncriptada = bcrypt.hashSync(password,10);
        db.User.create({
            email: email,
            password: passwordEncriptada,
            fecha: fecha,
            dni: dni,
            foto: foto
        })
        .catch(function(error){
            return res.send(error)
        })       
    },

    login: function(req, res){
        res.render("login.ejs")

    },

    processLogin: function(req,res){
        let emaildb = req.body.mail
        db.User.findOne({
            where:[{
                mail: emaildb
            }]
        })
        .then(function(user){
            if(user){
                if(bcrypt.compareSync(req.body.contrasena, user.password)){
                    req.session.user=user
                    if(req.body.remember_token){
                        res.cookie("recordame", user.id, {maxAge: 1000*60*40 })
                    }
                    res.redirect('/')
                
                } else {
                    res.send('Contraseña no existe')
                }
            } else {
                res.send('No se encontro un mail')
            }
        })
        .catch(function(error){
            return res.send(error)
        })
        
    },
    logout: function(req,res){
        req.session.destroy();
        if (req.cookies.userCookie) {
            res.clearCookie('recordame');
        }
        return res.redirect('/')
    }

  };


  module.exports = usersController;
