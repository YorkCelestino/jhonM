/**
 * PostController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
    allPosts:function(req,res){
        Posts.find().populateAll().then(function(post){
            if(!post || post.length==0){
                return res.send({
                    'success':false,
                    'message':'no record found'
                })
            }
            return res.send({
                'success':true,
                'message':'record fetched',
                'data':post
            })
        }).catch(function(err){
            sails.log.debug(err);
            return res.send({
                'success':false,
                'message':'can\'t fetched record'
            })             
        })
    },
    newPost:function(rq,res){
        newPost= req.body;
        Posts.create(newPost).then(function(post){
           return res.send({
               'success':true,
               'message':'creating record',
               'data':post
           })
           
        }).catch(function(err){
            sails.log.debug(err);
            return res.send({
                'success':false,
                'message':'can\'t create record'
            });
        })
    },
    updatePost: function(req,res){
        id= req.body.id;
        Posts.update(id,req.body).then(function(post){
            return res.send({
                'success':true,
                'message':'updating record',
                'data':req.body
            }) 
        }).catch(function(err){
            sails.log.debug(err);
            return res.send({
                'success':false,
                'message':'can\'t update record'
            });
        })
    },
    changeStatusPost: function(req,res){
        id= req.body.id;
        Posts.update(id,req.body).then(function(post){
            return res.send({
                'success':true,
                'message':'updating record',
                'data':req.body
            }) 
        }).catch(function(err){
            sails.log.debug(err);
            return res.send({
                'success':false,
                'message':'can\'t change status of record'
            });
        })
    }

};

