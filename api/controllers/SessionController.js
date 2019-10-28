/**
 * SessionController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
var bcrypt = require('bcryptjs')
module.exports = {

  new: function (req,res){
       
    var username = req.body.username;
    var password = req.body.password;  
    
    if(!username || !password){
        var noUserOrPassworError =[{Message:'Deve ingresar un usuario y una contraseña'}]
        req.session.flash ={
            err:noUserOrPassworError
        }
        sails.log.debug(noUserOrPassworError);
        return res.redirect('/signIn')
    }

    Users.findOne({username:username}).exec(function userFounded (err,user){
       
        if(err){
            req.session.flash ={
                err:err
            }
            sails.log.debug('aqui error 1');
            return res.redirect('/signIn')
        }
        if(!user){
            var noUserFoundedError = [{Message:'no User Founded'}]
            req.session.flash ={
                err:noUserFoundedError
            }
            sails.log.debug(noUserFoundedError);
            return res.redirect('/signIn')
        }
        bcrypt.compare(password,user.password, function passwordMach(err,valid){
            
            if(err){
                req.session.flash ={
                    err:err
                }
                sails.log.debug('password error');
                return res.redirect('/signIn')
            }
            if(!valid){
                var passwordDoNotMatchError =[{
                    Message:'invalid password'
                }]
                sails.log.debud(passwordDoNotMatchError)
                req.session.flash= {
                    err:passwordDoNotMatchError
                }
                return res.redirect('/signIn')
            }
            return res.redirect('/')
        })
    
    } )

}

};

