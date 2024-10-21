import express from "express";
import {
  signup,
  loginUser,
  logoutUser,
} from "../controllers/auth.controllers.js";
const router = express.Router();
router.post("/signup", signup);
router.post("/login", loginUser);
router.post("/logout", logoutUser);

export default router;
