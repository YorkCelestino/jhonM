/**
 * RolesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
 /**
 * find all Roles
*/ 
  allRoles:function(req,res){
      Roles.find().then(function(roles){
          if(!roles || roles.length==0){
              return res.send({
                  'success':false,
                  'messague':'no records found'
              })
          }
          return res.send({
            'success':true,
            'messague':'records fetched',
            'data': roles
          })
      }).catch(function(err){
          sails.log.debug(err);
          return res.send({
            'success':false,
            'messague':'no record fetch',
          });
      })
  },
/**
 * create new role
*/
  newRole: function(req,res){
      newRole= req.body;
       Roles.create(newRole).then(function(role){
        res.send({
            'success':true,
            'messague':'record created',
            'data':role
        })
       }).catch(function(err){
        sails.log.debug(err);
        return res.send({
          'success':false,
          'messague':'can\'t create record',
        });
    })
  },

  /**
   * update Role
   */

   updateRole:function(req,res){
       let id= req.body.id;

      Roles.update(id,req.body).then(function(role){
          return res.send({
            'success':true,
            'messague':'record updated',
            'data': role
          });
      }).catch(function(err){
        sails.log.debug(err);
        return res.send({
          'success':false,
          'messague':'can\'t update record',
        });
    })
   },


   /**
    * change status of a rol
   */
   changeStatusRole:function(req,res){
      let id= req.body.id;
      let role =  req.body; 

      Roles.update(id,role).then(function(role){
        return res.send({
          'success':true,
          'messague':'status changed',
          'data':role
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
