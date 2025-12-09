import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  image: String,
  github: String,
  demo: String
});

export default mongoose.model("Project", projectSchema);
