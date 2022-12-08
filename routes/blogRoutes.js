const express = require("express");
const router = express.Router();

const {
  getBlogs,
  postBlog,
  getBlog,
  deleteBlog,
} = require("../controllers/blogControllers");

router.route("/").get(getBlogs).post(postBlog);
router.route("/:id").get(getBlog).delete(deleteBlog);

module.exports = router;
