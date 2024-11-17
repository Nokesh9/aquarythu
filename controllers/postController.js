const Post = require("../models/post");

module.exports = {
  createPost: async (req, res) => {
    try {
      const {
        userid,
        categoryid,
        subcategoryid,
        title,
        description,
        size,
        quantity,
        cost,
        state,
        dist,
        longitude,
        latitude,
        village,
        address,
        image_url,
        video_url,
      } = req.body;

      const newPost = await Post.create({
        userid,
        categoryid,
        subcategoryid,
        title,
        description,
        size,
        quantity,
        cost,
        state,
        dist,
        longitude,
        latitude,
        village,
        address,
        image_url,
        video_url,
      });

      res.status(201).json(newPost);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  getAllPosts: async (req, res) => {
    try {
      const posts = await Post.findAll();
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  updatePost: async (req, res) => {
    try {
      const { id } = req.params;
      const updatedData = req.body;

      const post = await Post.findByPk(id);
      if (!post) {
        return res.status(404).json({ message: "Post not found." });
      }

      await post.update(updatedData);
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  deletePost: async (req, res) => {
    try {
      const { id } = req.params;

      const post = await Post.findByPk(id);
      if (!post) {
        return res.status(404).json({ message: "Post not found." });
      }

      await post.destroy();
      res.status(200).json({ message: "Post deleted successfully." });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
