const router = require('express').Router();
const userRoutes = require('./user-routes');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');

//route for users
router.use('/users', userRoutes);

//route for posts
router.use('/posts', postRoutes);

//route for comments
router.use('/comments', commentRoutes);


module.exports = router;