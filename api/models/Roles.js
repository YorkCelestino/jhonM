/**
 * Roles.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name:{
      type:'string'
    },
    slug: {
      type:'string'
    },
    description: {
      type:'string'
    },
    user:{
      model:'Users'
    },
    isActive: {
      type:'boolean',
      defaultsTo: true
  }

  },

};

