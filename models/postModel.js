const mongoose = require('mongoose');

// DB Schema for posts
const postsSchema = new mongoose.Schema({
    title : {
        type: String,
        required: true,
        trim: true,
        maxLength: 200
    },
    content: {
        type: String,
        required: true,
        trim: true
    },
    numberOfLikes: {
        type: Number,
        default: 0
    }
},
{
    timestamps: true,
    collection: 'new_collection'
});

// static methods exposed to the controller
postsSchema.statics.createPost = async function(title, content) {
    try {
        const post = new this({
            title,
            content
        });
        await post.save();
        return post;
    }
    catch (error) {
        throw new Error('Error creating post: ' + error.message);
    }
}

postsSchema.statics.getPosts = async function() {
    try {
        const posts = await this.find();
        return posts;
    }
    catch (error) {
        throw new Error('Error fetching posts: ' + error.message);
    }
} 

const Posts = mongoose.model('Posts', postsSchema);
module.exports = Posts;