import mongoose from 'mongoose';

const { Schema } = mongoose;

// Alt schema'lar
const educationSchema = new Schema({
  degree: String,
  school: String,
  year: Number
});

const experienceSchema = new Schema({
  company: String,
  jobTitle: String,
  duration: Number
});

const awardSchema = new Schema({
  name: String,
  year: Number,
  company: String
});

const skillsSchema = new Schema({
  name: String,
  proficiency: Number
});

const knowledgeSchema = new Schema({
  name: String
});

// Resume schema
const resumeSchema = new Schema({
  educated: [educationSchema],
  experience: [experienceSchema],
  awards: [awardSchema],
  skills: [skillsSchema],
  knowledges: [knowledgeSchema]
});

const Resume = mongoose.model('Resume', resumeSchema);

export default Resume;