const { Router } = require("express");
const router = Router();
const controllers = require("../controllers");

router.get("/lastestComments", controllers.comment.lastestComments);
router.post("/create", controllers.comment.create);

module.exports = router;
