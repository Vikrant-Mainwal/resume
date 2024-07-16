import UserModel from "../MongoDB/models/user.js";
import jwt from "jsonwebtoken";
import validator from "validator";
import bcrypt from "bcrypt";

// Create a token for a given user ID
const createToken = (id) => {
  const secret = process.env.JWT_SECRET;
  if (!secret) {
    throw new Error("Missing JWT_SECRET in environment variables");
  }
  return jwt.sign({ id }, secret, { expiresIn: "30d" });
};

// Register a new user
const registerUser = async (req, res) => {
  const { name, password, email } = req.body;

  try {
    // Check if the user already exists
    const exists = await UserModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "User already exists" });
    }

    // Validate email
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid email",
      });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const newUser = new UserModel({
      name,
      email,
      password: hashedPassword,
    });

    const newResume = {};

    // Save the user and create a token
    const user = await newUser.save();
    const token = createToken(user._id);
    res.json({ success: true, token, message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Login a user
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Find the user by email
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    // Compare the provided password with the hashed password
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.json({ success: false, message: "Incorrect password" });
    }

    // Create a token and respond
    const token = createToken(user._id);
    res.json({ success: true, message: "User logged in successfully", token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Update user profile
const updateProfile = async (req, res) => {
  const {
    userId,
    name,
    enrollment,
    course,
    branch,
    phone,
    email,
    collegeemail,
    linkedin,
    github,
    education,
    experience,
    skills,
    projects,
    certifications,
    languages,
    interests,
  } = req.body;

  try {
    // Find the existing user by ID and update their resume
    const updatedUser = await UserModel.findByIdAndUpdate(
      userId,
      {
        "resume.name": name,
        "resume.enrollment": enrollment,
        "resume.course": course,
        "resume.branch": branch,
        "resume.phone": phone,
        "resume.email": email,
        "resume.collegeemail": collegeemail,
        "resume.linkedin": linkedin,
        "resume.github": github,
        "resume.education": education,
        "resume.experience": experience,
        "resume.skills": skills,
        "resume.projects": projects,
        "resume.certifications": certifications,
        "resume.languages": languages,
        "resume.interests": interests,
      },
      { new: true } // Return the updated document
    );

    if (!updatedUser) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    res.json({ success: true, updatedUser, message: "Successfully Updated" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

// update education
const updateEducation = async (req, res) => {
  const { userId, education } = req.body;

  try {
    // Find the existing user by ID and update their resume's education
    const updatedUser = await UserModel.findByIdAndUpdate(
      userId,
      {
        "resume.education": education,
      },
      { new: true } // Return the updated document
    );

    if (!updatedUser) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }

    res.json({
      success: true,
      updatedUser,
      message: "Education successfully updated",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

//   update projects
const updateProjects = async (req, res) => {
  const { userId, projects } = req.body;

  try {
    // Find the existing user by ID and update their resume's projects
    const updatedUser = await UserModel.findByIdAndUpdate(
      userId,
      { "resume.projects": projects },
      { new: true } //Return thr updated Resume
    );
    if (!updatedUser) {
      res.json({ success: false, message: "User Not Found" });
    }

    res.json({
      success: true,
      updatedUser,
      message: "Successfully added Projects",
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Internal error" });
  }
};

// For update Skills
const updateSkills = async (req, res) => {
  const { userId, skills } = req.body;

  try {
    // Find the existing user by ID and update their resume's skills
    const updatedUser = await UserModel.findByIdAndUpdate(
      userId,
      { "resume.skills": skills },
      { new: true }
    );
    if (!updatedUser) {
      res.json({ success: false, message: "User Not Found" });
    }

    res.json({
      success: true,
      updatedUser,
      message: "Successfully added Skills",
    });
  } catch (error) {
    console.log(error);
    req.json({ success: false, message: "error" });
  }
};

// Get all profiles
const getProfile = async (req, res) => {
  try {
    let resume = await UserModel.findById(req.body.userId);
    res.json({
      success: true,
      data: resume,
      message: "All profiles retrieved successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export {
  registerUser,
  loginUser,
  updateProfile,
  updateEducation,
  updateProjects,
  updateSkills,
  getProfile,
};
