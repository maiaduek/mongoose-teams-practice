var express = require("express");
const Team = require("../models/Team");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
    res.render("index", { title: "Express" });
});

router.get("/find-team/:teamId", function(req, res) {
    Team.findById(req.params.teamId).then((results) => {
        console.log("found the team! ", results);
        console.log("RES: ", res);
        console.log("RESULT: ", results);
        res.render("find-team", {
            teamName: results.teamName,
            numOfTeammates: results.numOfTeammates,
            color: results.color,
            mascot: results.mascot,
        });
    });
});

router.get("/all-teams", function(req, res) {
    Team.find().then((results) => {
        console.log("Found teams!", results);
        res.render("all-teams", {
            teams: results,
        });
    });
});

router.post("/create-team", function(req, res) {
    Team.create({
            teamName: req.body.teamName,
            numOfTeammates: req.body.numOfTeammates,
            color: req.body.color,
            mascot: req.body.mascot,
        })
        .then((results) => {
            console.log("created team:", results);
            res.render("create-team", {
                teamName: results.teamName,
                numOfTeammates: results.numOfTeammates,
                color: results.color,
                mascot: results.mascot,
            });
        })
        .catch((err) => {
            console.log("There was an error:", err);
        });
});

router.get("/create-team", (req, res) => {
    res.render("create-team");
});

module.exports = router;