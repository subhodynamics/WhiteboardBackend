const mongoose = require('mongoose');

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
    collection: 'test'
});

postsSchema.statics.ceatePost = async function(title, content) {
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
