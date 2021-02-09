const models = require('../database/models');

const createPost = async (req, res) => {
  try {
    const post = await models.Post.create(req.body);
    return res.status(201).json({
      post,
    });
  } catch (error) {
    return res.status(500).json({error: error.message})
  }
}

const getAllPosts = async (req, res) => {
    try {
      const posts = await models.Post.findAll({
        include: [
          {
            model: models.Comment,
            as: 'comments'
          },
          {
            model: models.User,
            as: 'author'
          }
        ]
      });
      return res.status(200).json({ posts });
    } catch (error) {
      return res.status(500).send(error.message);
    }
  }

module.exports = {
  createPost,
  getAllPosts
}