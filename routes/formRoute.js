const express = require("express")
const formController = require("../controller/formController")

const router = express.Router();

router.get("/getRequest", formController.firstGetRequest)
router.post("/postrequest", formController.firstPostRequest)

module.exports = router;