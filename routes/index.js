const { Router } = require('express');
const controllers = require('../controllers');
const user = require('../controllers/user_controller');


const router = Router();
//initial Page
router.get('/', (req, res) => res.send('Welcome'))

//create post
router.post('/posts', controllers.createPost);

//get all posts
router.get('/posts', controllers.getAllPosts);

//get one post by ID
router.get('/posts/:postId', controllers.getPostById);

//update one post by id
router.put('/posts/:postId', controllers.updatePost);

//delete one post by id
router.delete('/posts/:postId', controllers.deletePost);

router.get('/figureAreas', controllers.getFigureAreas);


//register
router.post('/register', user.registerUser);

//login
router.post('/login', user.login);



module.exports = router;