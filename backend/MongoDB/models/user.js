import mongoose from "mongoose";


const educationSchema = new mongoose.Schema({
  institution: { type: String, },
  course: { type: String, },
  degree: { type: String, },
  cpi: { type: String, },
  graduationDate: { type: String, },
});

const experienceSchema = new mongoose.Schema({
  title: { type: String, },
  company: { type: String, },
  location: { type: String, },
  startDate: { type: String, },
  endDate: { type: String, },
  responsibilities: { type: [String], },
});

const projectSchema = new mongoose.Schema({
  name: { type: String, },
  description1: { type: String, },
  description: { type: String, },
  technologies: { type: [String], },
  year: { type: String, },
});

const languageSchema = new mongoose.Schema({
  name: { type: String, },
  proficiency: { type: String, },
});

const skillsSchema = new mongoose.Schema({
  languages: { type: String, },
  framework: { type: String, },
  cloud: { type: String, },
  databases: { type: String, },
});

const resumeSchema = new mongoose.Schema({
  name: { type: String,  required: true  },
  enrollment: { type: String,  required: true  },
  course: { type: String,  required: true  },
  branch: { type: String, required: true  },
  phone: { type: String, required: true  },
  email: { type: String, required: true  },
  collegeemail: { type: String, required: true  },
  linkedin: { type: String,  required: true },
  github: { type: String, required: true  },
  education: { type: [educationSchema], },
  experience: { type: [experienceSchema], default: [] },
  skills: { type: skillsSchema, },
  projects: { type: [projectSchema], },
  certifications: { type: [String], },
  languages: { type: [languageSchema], },
  interests: { type: [String], },
});

const userSchema = new mongoose.Schema({
  name: { type: String,  },
  email: { type: String, required: true,unique:true },
  password: { type: String, required: true,unique:true },
  resume:{type:resumeSchema ,default:{}}
});

const UserModel =  mongoose.model('User',userSchema)

export default UserModel;