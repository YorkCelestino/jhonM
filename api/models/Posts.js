/**
 * Post.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    description:{
      type:'string',
      required: true,
    },
    user:{
      collection:'users',
      via:'post'
    },
    isActive:{
      type:'boolean',
      defaultsTo: true
    }
  },

};

