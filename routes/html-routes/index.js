const express = require("express");
const router = express.Router();
const pollsRoute = require("./htmlRoutes");


// get route -> index
router.get("/", (req, res) => {
   res.redirect("/createPoll");
});

// poll page
   router.use("/createPoll", pollsRoute);


module.exports = router;