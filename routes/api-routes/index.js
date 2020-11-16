const router = require("express").Router();
const createApiRoute = require("./create");
const pollsApiRoute = require("./polls");
const pollsUserApiRoute = require("./pollsByUser");
const voteApiRoute = require("./vote");
const resultsApiRoute = require("./results");

// ========= WHY DOES (ROUTER.USE) ONLY WORK ONCE? ============
// go to /api/create
router.use("/create", createApiRoute);

// go to /api/polls
router.get("/polls", (req, res) => {
    res.sendFile(pollsApiRoute);
});

// go to /api/polls/userid
router.get("/polls/:userid", (req, res) => {
    res.sendFile(pollsUserApiRoute);
});

// // go to /api/vote
router.get("/vote/:pollid", (req, res) => {
    res.sendFile(voteApiRoute);
});

// // go to /api/results
router.get("/results/:pollid", (req, res) => {
    res.sendFile(resultsApiRoute);
});

module.exports = router;