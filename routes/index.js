const { Router } = require('express');
const controllers = require('../controllers');


const router = Router();
//initial Page
router.get('/', (req, res) => res.send('Welcome'))

//create post
router.post('/posts', controllers.createPost);

//get all posts
router.get('/posts', controllers.getAllPosts);


module.exports = router;