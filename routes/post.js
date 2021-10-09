const Post = require("../models/post");
const express = require("express");
const router = express.Router();
const auth=(req,res,next)=>{
    next();
}
router.get("/addpost",(req,res)=>{
    res.render("addpost.ejs");
});
router.post("/addpost",(req,res)=>{
    const {title,description,left,right,design}=req.body;
    const newPost = new Post({
        title,
        description,
        left,
        right,
        design
    }
    )
    newPost.save().then(()=>{console.log("Sucessfully Added Post"); res.send("Successfully Added Post")}).catch((err)=>{console.log("Here is error: "+err)});
})
router.get("/allpost",auth,(req,res)=>{
    Post.find().then(data=>{
        res.json(data);
    }).catch(err=>res.json({status:"Error"}));
});
router.get("/editpost",(req,res)=>{
    Post.find().then(data=>{
        res.render("editpost.ejs",{data:data});
    }).catch(err=>res.json({status:"Error"}));
});
router.get("/editpost/:id",(req,res)=>{
    console.log("HEy"+req.params);
    Post.findById(req.params.id).then((post)=>{
        res.render("poste.ejs",{post:post});
    }).catch(err=>{console.log("Not Found with error"+err); res.send("Error!")})
});
router.post("/editpost/:id",(req,res)=>{
    Post.findById(req.params.id).then(post=>{
        post.title = req.body.title;
        post.description = req.body.description;
        post.left = req.body.left;
        post.right = req.body.right;
        post.design = req.body.design;
        post.save().then(()=>res.render("back.ejs")).catch(err=>{console.log("Error: "+err);res.send("Error occur")})
    })
})
router.get("/deletepost/:id",(req,res)=>{
    Post.findByIdAndDelete(req.params.id).then(()=>{
        console.log("Deleted successfully");
        res.send("Deleted");
    }).catch(err=>res.send("Error Occured!"));
})
module.exports = router;