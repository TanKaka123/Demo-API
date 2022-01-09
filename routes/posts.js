const express = require("express");
const { updateOne } = require("../models/Post");
const router = express.Router();
const Post = require("../models/Post");

// / : get all

// Get all post
router.get("/", async (req, res) => {
  // dữ lieu dang luu db cloud
  try {
    const posts = await Post.find();
    res.json(posts); // in ra dạng json
  } catch (err) {
    res.json({ message: err });
  }
});

// thém 1 dữ liêu
// Submit 1 post
router.post("/", async (req, res) => {
  const post = new Post({
    title: req.body.title,
    description: req.body.description,
  });
  // thêm thông tin user
  // title :
  // description :van a
  // lưu database
  try {
    const savePost = await post.save();
    res.json(savePost);
  } catch (err) {
    res.json({ message: err });
  }
});
  // special 
  router.get("/:postId", async (req, res) => {
    try {
      const post = await Post.findById(req.params.postId);
      res.json(post);
    } catch (err) {
      res.json({ message: err });
    }
  });


 

  // remove post
  router.delete("/:postId", async (req, res) => {
    try {
      const removePost = await Post.remove({ _id: req.params.postId });
      res.json(removePost);
    } catch (err) {
      res.json({ message: err });
    }
  });

  // Update post
  router.patch("/:postId", async (req, res) => {
    try {
      const updatePost = await Post.updateOne(
        {
          _id: req.params.postId,
        },
        { $set: { title: req.body.title } }
      );
      res.json(updatePost);
    } catch (err) {
      res.json({ message: err });
    }
  });
  // post.save()
  //   .then((data) => {
  //     res.json(data);
  //   })
  //   .catch((err) => {
  //     res.json({ message: err });
  //   });
  //   console.log(req.body)


module.exports = router;

// import module express
// import và gán biến router
// router.get
// export router
// cài npm  install body-parser vì sau khi post thì trả undefine
