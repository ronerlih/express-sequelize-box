const express = require("express");
const router = express.Router();
const commentsRoute = require("./comments");

// COMMENTS page
router.use("/comments", commentsRoute);

// HOME page
router.get("/", (req, res) => {
   res.redirect("/comments");
});


module.exports = router;
