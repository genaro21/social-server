const { Router } = require("express");
const router = Router();
const controllers = require("../controllers");

router.post("/signIn", controllers.user.signIn);
router.post("/signUp", controllers.user.signUp);

module.exports = router;
