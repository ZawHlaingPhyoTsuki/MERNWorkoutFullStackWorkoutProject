import { Router } from "express";
// import { Router } from "express";
// const { Router } = express;

// import {
//   getWorkouts,
//   getWorkout,
//   createWorkout,
//   deleteWorkout,
//   updateWorkout,
// } from "../controllers/workoutController.js";
// if you want to import with the above method, you have to export those methods in the controller individually:
// workoutController.js
// export const getWorkouts = async (req, res) => { ... }
// export const getWorkout = async (req, res) => { ... }
// export const createWorkout = async (req, res) => { ... }
// export const deleteWorkout = async (req, res) => { ... }
// export const updateWorkout = async (req, res) => { ... }

// if not, you can import in the following methods:
// import workoutController from "../controllers/workoutController.js";
// but, you have to use workoutController.getWorkouts(); instead of getWorkouts()

import workoutController from "../controllers/workoutController.js";

const router = Router();

// GET all workouts
router.get("/", workoutController.getWorkouts);

// GET a single workout
router.get("/:id", workoutController.getWorkout);

// POST a new workout
router.post("/", workoutController.createWorkout);

// DELETE a workout
router.delete("/:id", workoutController.deleteWorkout);

// UPDATE a workout
router.patch("/:id", workoutController.updateWorkout);

export default router;
