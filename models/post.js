const mongoose = require("mongoose");
const PostSchema= new mongoose.Schema({
    title:{type:String},
    description:{type:String},
    left:{type:String},
    right:{type:String},
    design:{type:String},
},{
    timestamps:true
});
const Post = mongoose.model("Post",PostSchema);
module.exports= Post;
