const { Router } = require("express");
const router = Router();
const controllers = require("../controllers");

router.post("/upload", controllers.post.upload);
router.get("/recentUploads", controllers.post.recentUploads);
router.get("/stats", controllers.post.stats);
router.get("/mostPopular", controllers.post.mostPopular);
router.get("/details/:postId", controllers.post.details);
router.delete("/remove", controllers.post.remove);
router.post("/like", controllers.post.like);

module.exports = router;
