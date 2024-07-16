import express from 'express'
import {getProfile, loginUser, registerUser, updateEducation, updateProfile, updateProjects, updateSkills } from '../controller/userController.js';
import authMiddleware from '../middleware/auth.js';


const userRouter = express.Router();

userRouter.post("/register",registerUser)
userRouter.post("/login",loginUser)
userRouter.post("/profile",authMiddleware,updateProfile)
userRouter.post("/education",authMiddleware,updateEducation)
userRouter.post("/projects",authMiddleware,updateProjects)
userRouter.post("/skills",authMiddleware,updateSkills)
userRouter.get("/get-profile",authMiddleware,getProfile)

export default userRouter