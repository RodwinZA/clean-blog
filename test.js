const mongoose = require("mongoose");

// Import BlogPost model from previously created models folder.
// BlogPost represents the BlogPosts collection.
const BlogPost = require("./models/BlogPost");

// Connect to database. If my_database does not exist it will be automatically created.
mongoose.connect("mongodb://localhost/my_database", {useNewUrlParser: true, useUnifiedTopology: true});

// Make Mongoose use `findOneAndUpdate()`. Note that this option is `true`
// by default, you need to set it to false.
mongoose.set('useFindAndModify', false);

BlogPost.create({
    title: "The Mythbuster’s Guide to Saving Money on Energy Bills",
    body: "If you have been here a long time, you might remember when I went on ITV Tonight to dispense a masterclass in saving money on energy bills. Energy-saving is one of my favourite money topics, because once you get past the boring bullet-point lists, a whole new world of thrifty nerdery opens up. You know those bullet-point lists. You start spotting them everything at this time of year. They go like this:"
}, (error, blogpost) => {
    console.log(error, blogpost);
});

BlogPost.create({
    title: "As more celebs venture into beauty business, Hailey Bieber is next to launch her own line",
    body: "Hailey Bieber is the latest celebrity to get ready to launch her own skincare line. The model recently filed a trademark request for the brand name Rhode which is also her middle name."
}, (error, blogpost) => {
    console.log(error, blogpost);
});

BlogPost.create({
    title: "In letter to Bulls fans, Jake White explains 'significance of 24'",
    body: "Bulls director of rugby Jake White penned an open letter to their fans, thanking them for their ongoing support and explaining the significance of '#BullsFamily24'."
}, (error, blogpost) => {
    console.log(error, blogpost);
});

//  QUERYING

// To select all documents in the collection, pass an empty document into the query parameter
BlogPost.find({} /* <- empty document */, (error, blogpost) => {
    console.log(error, blogpost);
});

// To find all documents with a particular title, eg 'As more celebs venture into beauty business, Hailey Bieber is next to launch her own line'
BlogPost.find({
    title: "As more celebs venture into beauty business, Hailey Bieber is next to launch her own line"
}, (error, blogpost) => {
    console.log(error, blogpost);
});

// To find all documents containing a specific word in the title, eg "the"
BlogPost.find({
    title: /letter/ /* enclose query word(s) with forward slashes - also known as the wildcard operator */
}, (error, blogpost) => {
    console.log(error, blogpost);
});

// To retrieve single document we search for it by id
var id = "601d2c391cfcb2488c5f2575";

BlogPost.findById(
    id,
(error, blogpost) => {
    console.log(error, blogpost);
});

// UPDATING

// To update a document we use the id as first argument and the fields/values to update in the second
var id = "601d2c391cfcb2488c5f2575";

BlogPost.findByIdAndUpdate(id, {
    title: "Hailey Bieber copyrights her second-name, Rhode, for new make-up brand. One of many for celebs."
}, (error, blogpost) => {
    console.log(error, blogpost);
});

// DELETING

// To delete a document we use the id as the first argument
var id = "601d2c391cfcb2488c5f2574";

BlogPost.findByIdAndDelete(id, (error, blogpost) => {
    console.log(error, blogpost);
});