/**
 * Users.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

   name:{
    type:'string',
    required: true,
  },
   lastname:{
     type:'string',
     required: true,
    },
   username:{
    type:'string',
    unique: true,
    required: true,
   } ,
   email:{
     type:'string',
     required: true
   },
   password:{
     type:'string',
     required: true
   },
   saltSecret:{
    type:'string',
   },
  
  role:{
    collection:'roles',
    via:'user'
  },
  post:{
    model:'posts'
  },
   isActive:{
     type: 'boolean',
     defaultsTo: true
    }

  },

};

