import express from "express";
import { Tasks } from "../modals/tasks.mjs";
import mongoose from "mongoose";
import checkAuth from "../middlewares/check-auth.mjs";

const router = express.Router();

// GET /tasks - admin: all tasks, user: only own tasks
router.get("/", checkAuth, async (request, response, next) => {
  try {
    const { role, userId } = request.userData;
    console.log("User Data", request.userData);
    const filter = role === "admin" ? {} : { userId: userId };
    console.log("Filter", filter);
    const tasks = await Tasks.find(filter);

    response.status(200).json({
      message: "Tasks Fetched Successfully",
      count: tasks.length,
      result: tasks.map((task) => {
        return {
          _id: task._id,
          userId: task.userId,
          title: task.title,
          description: task.description,
          priority: task.priority,
          status: task.status,
          deadline: task.deadline,
          createdAt: task.createdAt,
          updatedAt: task.updatedAt,
          request: {
            type: "GET",
            url: `${process.env.BASE_URL}/tasks/${task._id}`,
          },
        };
      }),
    });
  } catch (error) {
    console.error(error);
    response.status(500).json({
      message: "Failed to Fetch Tasks",
      error: error,
    });
  }
});

// GET /tasks/user/:userId - only admin or the user themself
router.get("/user/:userId", checkAuth, async (request, response, next) => {
  try {
    const { role, userId: authUserId } = request.userData;
    const targetUserId = request.params.userId;

    if (role !== "admin" && authUserId !== targetUserId) {
      return response.status(403).json({ message: "Forbidden" });
    }

    const tasks = await Tasks.find({ userId: targetUserId });

    if (!tasks || tasks.length === 0) {
      return response.status(404).json({ message: "No Tasks Found" });
    }

    response.status(200).json({
      message: "Tasks Fetched Successfully",
      count: tasks.length,
      result: tasks.map((task) => {
        return {
          _id: task._id,
          userId: task.userId,
          title: task.title,
          description: task.description,
          priority: task.priority,
          status: task.status,
          deadline: task.deadline,
          createdAt: task.createdAt,
          updatedAt: task.updatedAt,
          request: {
            type: "GET",
            url: `${process.env.BASE_URL}/tasks/${task._id}`,
          },
        };
      }),
    });
  } catch (error) {
    console.error(error);
    response.status(500).json({
      message: "Failed to Fetch Tasks",
      error: error,
    });
  }
});

// GET /tasks/:_id - only admin or owner
router.get("/:_id", checkAuth, async (request, response, next) => {
  try {
    const task = await Tasks.findById(request.params._id);
    if (!task) {
      return response.status(404).json({ message: "Task Not Found" });
    }

    const { role, userId: authUserId } = request.userData;
    if (role !== "admin" && task.userId.toString() !== authUserId) {
      return response.status(403).json({ message: "Forbidden" });
    }

    response.status(200).json({
      message: "Task Fetched Successfully",
      result: task,
      request: {
        type: "GET",
        url: `${process.env.BASE_URL}/tasks/${task._id}`,
      },
    });
  } catch (error) {
    console.error(error);
    response.status(500).json({
      message: "Failed to Fetch Task",
      error: error,
    });
  }
});

// POST /tasks/create - users may create tasks for themselves; admin can create for any user
router.post("/create", checkAuth, async (request, response, next) => {
  try {
    const { role, userId: authUserId } = request.userData;
    const targetUserId = request.body.userId || authUserId;

    if (role !== "admin" && targetUserId !== authUserId) {
      return response
        .status(403)
        .json({ message: "Forbidden to create for other users" });
    }

    const task = await Tasks.findOne({
      userId: targetUserId,
      title: request.body.title,
    });
    console.log("Task", task);
    if (task) {
      return response.status(409).json({
        message: "Task already exists",
      });
    }

    const newTask = new Tasks({
      _id: new mongoose.Types.ObjectId(),
      userId: targetUserId,
      title: request.body.title,
      description: request.body.description,
      priority: request.body.priority,
      status: request.body.status,
      deadline: request.body.deadline,
    });

    newTask
      .save()
      .then((result) => {
        response.status(201).json({
          message: "Task Created Successfully",
          result: result,
        });
      })
      .catch((error) => {
        console.error(error);
        response.status(500).json({
          message: "Failed to Create Task",
          error: error,
        });
      });
  } catch (error) {
    console.error(error);
    response.status(500).json({
      message: "Failed to Create Task",
      error: error,
    });
  }
});

// DELETE /tasks/:_id - only admin or owner
router.delete("/:_id", checkAuth, async (request, response, next) => {
  try {
    const task = await Tasks.findById(request.params._id);
    if (!task) {
      return response.status(404).json({ message: "Task Not Found" });
    }

    const { role, userId: authUserId } = request.userData;
    if (role !== "admin" && task.userId.toString() !== authUserId) {
      return response.status(403).json({ message: "Forbidden" });
    }

    const deleted = await Tasks.findByIdAndDelete(request.params._id);

    response.status(200).json({
      message: "Task Deleted Successfully",
      result: deleted,
      request: {
        type: "DELETE",
        url: `${process.env.BASE_URL}/tasks/${deleted._id}`,
      },
    });
  } catch (error) {
    console.error(error);
    response.status(500).json({
      message: "Failed to Delete Task",
      error: error,
    });
  }
});

export default router;
