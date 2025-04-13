const Posts = require('../models/postModel');

// Controller functions for handling post-related requests
const createPost = async (req, res) => {
    try {
        const { title, content } = req.body;
        const post = await Posts.createPost(title, content);
        res.status(201).json({ post });
    } catch (error) {
        console.error('POST ERROR:', error);
        res.status(500).json({ error: error.message });
    }
}
const getPosts = async (req, res) => {
    try {
        const posts = await Posts.getPosts();
        res.status(200).json({ posts });
    } catch (error) {
        console.error('GET ERROR:', error);
        res.status(500).json({ error: 'Error fetching posts' });
    }
}

module.exports = {
    createPost,
    getPosts
};
