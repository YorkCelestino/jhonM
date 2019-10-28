/**
 * UsersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {


  
  
 /**
  * function for see all user
  */  
   allUsers: function (req,res){
    Users.find().populateAll().then(
        function(user){
            if(!user || user.length == 0){
               return res.send({
                   'success': false,
                   'message':'no records found'
               });
            }
            return res.send({
                'success': true,
               'message': 'record fetched',
                'data':user
            });
        }).catch(function(err){
            sails.log.debug(err);
            return res.send({
               'message': 'no record fetch',
               'success': false
            });
        });
    },

    /**
     * function for create new user
     */
   newUser: function(req,res){
    
       var bcrypt = require('bcryptjs');//  library to encrypt password

       var newUser= req.body;
       bcrypt.genSalt(10, (err, salt) => {
       bcrypt.hash(req.body.password,salt,(err,hash)=>{
          
           newUser.password= hash;
           newUser.saltSecret = salt;

           Users.create(newUser).then(function(user){
             
            return res.redirect('/signIn')
            /*return res.json({
              'message': 'record created',
              'success': true
            })*/
        }).catch(function(err){
          sails.log.debug(err);
  
            console.log(JSON.stringify(err))
            req.session.flash={
              err:err
            }
          
          if(err.code=='E_UNIQUE'){
            return res.send({
                'message':'The username ' +'"'+ err.raw.keyValue.username+'"' + ' it already exists.',
                'code': err.raw.code
            });
          }
          return res.send({
             'message': 'unable to create record',
             'success': false
          });
        })

       })
    })
   },

   /**
    * update User
   */
   updateUser:function(req,res){
       let id= req.body.id;
    
      
       Users.update(id,req.body).then(function(user){
           return res.send({
               'success':true,
               'message':'user update',
               'data':req.body
           });
       }).catch(function(err){
        sails.log.debug(err);
        return res.send({
           'message': 'can\'t update record',
           'success': false
        });
    });
   },

   
   /**
    * change status of a rol
   */
  changeStatusUser:function(req,res){
    let id= req.body.id; 

    Users.update(id,req.body).then(function(user){
      return res.send({
        'success':true,
        'messague':'status changed',
        'data':req.body
      })
    }).catch(function(err){
      sails.log.debug(err);
      return res.send({
        'success':false,
        'messague':'can\'t change status of record',
      });
  })
  }
};

