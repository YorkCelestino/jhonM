
/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'pages/index' },
  '/signUp':{view:'pages/signUp'},
  '/signIn':{view:'pages/signIn'},
  


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/
/**
 * Users Routes 
 */
  'GET /api/users': 'UsersController.allUsers',// route for get all Users
  'POST /api/users': 'UsersController.newUser',// route for add user
  'Put /api/users': 'UsersController.updateUser',// route for update user through the body
  'Put /api/usersStatus': 'UsersController.changeStatusUser',// route for change status to false or true 

/**
 * Roles Routes
 */

 'Get /api/roles': 'RolesController.allRoles',// route for get all Role
 'Post /api/roles': 'RolesController.newRole',// route for add Role
 'Put /api/roles': 'RolesController.updateRole',// route for update through the body
 'Put /api/rolesStatus': 'RolesController.changeStatusRole',// route for change status to false or true 


/**
 * Post Routes
 */
'GET /api/posts': 'PostsController.allPosts',// route for get all posts
'POST /api/posts': 'PostsController.newPost',// route for add post
'Put /api/posts': 'PostsController.updatePost',// route for update post through the body
'Put /api/postsStatus': 'Posts.changeStatusPost',// route for change status to false or true 

/**
 * login routes
 */
'POST /api/signIn': 'SessionController.new'
};
