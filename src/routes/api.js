const express = require('express');
const UsersController = require("../controllers/UsersController")
const TasksController = require("../controllers/TasksController")
const AuthVerifyMiddleware = require("../middleware/AuthVerifyMiddleware")






const router = express.Router();


router.post("/registration",UsersController.registration);
router.post("/login",UsersController.login);
router.post("/profileUpdate",AuthVerifyMiddleware,UsersController.profileUpdate);
router.get("/profileDetails",AuthVerifyMiddleware,UsersController.profileDetails);

router.get("/RecoverVerifyEmail/:email",UsersController.RecoverVerifyEmail);
router.get("/RecoverVerifyOTP/:email/:otp",UsersController.RecoverVerifyOTP);
router.post("/RecoverResetPass",UsersController.RecoverResetPass);

router.post("/createTask",AuthVerifyMiddleware,TasksController.createTask);
router.get("/deleteTask/:id",AuthVerifyMiddleware,TasksController.deleteTask);
router.get("/updateTask/:id/:status",AuthVerifyMiddleware,TasksController.updateTask);
router.get("/TaskListByStatus/:status",AuthVerifyMiddleware,TasksController.TaskListByStatus);
router.get("/taskCount",AuthVerifyMiddleware,TasksController.taskCount);

module.exports=router;
