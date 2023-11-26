const router = require("express").Router();

const { infoController } = require("../../controllers");

router.get("/info", infoController.info);

module.exports = router;
