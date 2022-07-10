const express = require("express");
const router = express.Router();
const UserController = require("../controllers/user.controller");
const UserGroupController = require("../controllers/usergroup.controller");
const HabitController = require("../controllers/habit.controller");

const usercontroller = new UserController();
const usergroupcontroller = new UserGroupController();
const habitcontroller = new HabitController();

router.get("/", (req, res) => {
  return res.send("You have reached the landing page of habitsTracker");
});

// CREATE A USER
router.post("/register", usercontroller.register);

//login
router.post("/login", usercontroller.login);

//GET all groups a user belongs to
router.get("/:userId/groups", usergroupcontroller.listGroups);

//GET all habits for a user
router.get("/:userId/habits", habitcontroller.list);

module.exports = router;