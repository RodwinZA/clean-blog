const express = require("express");
const app = express();
const path = require("path");
const PORT = process.env.PORT || 4000;
const ejs = require("ejs");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const BlogPost = require("./models/BlogPost.js");

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Express uses its own implementation of body-parser below
// app.use(express.json());
// app.use(express.urlencoded());

// Connect to mongodb
mongoose.connect("mongodb://localhost/my_database", {useNewUrlParser: true, useUnifiedTopology: true});


// App Routes
app.get("/", async (req, res) => {
    // Assign all of the blog posts to the variable blogposts
    const blogposts = await BlogPost.find({});
    res.render("index",
    // Pass the data back to the client by rendering the blog posts as the second argument
    {
        blogposts: blogposts
    });
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/post/:id", async (req, res) => {
    const blogpost = await BlogPost.findById(req.params.id);
    res.render("post", {
        blogpost: blogpost
    });
});

app.get("/contact", (req, res) => {
    res.render("contact");
});

app.get("/posts/new", (req, res) => {
    res.render("create");
});


// Handle input
// app.post("/posts/store", (req, res) => {
//     BlogPost.create(req.body, (error, blogpost) => {
//         res.redirect("/");
//     });
// });

// Replace above callback layers with async await
app.post("/posts/store", async (req, res) => {
    await BlogPost.create(req.body);
    res.redirect("/");
});

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});