const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlogPostSchema = new Schema({
    title: String,
    body: String
});

// Accessing the database via mongoose.model
const BlogPost = mongoose.model(
    /* singular name of the collection your model is for.
     Mongoose will create the model for you BlogPosts (plural)
     collection */
    "BlogPost",
    BlogPostSchema);

// Export the BlogPost variable. Only one variable can be exported
module.exports = BlogPost;