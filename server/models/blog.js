import mongoose from "mongoose";

let blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  description: {
    type: String,
    required: [true, "Content is required"],
  },
  author: {
    type: String,
    required: [true, "Author is required"],
  },
    image_url: {
        type: String,
        required: [true, "Image URL is required"],
    },
    readTime:{
        type: Number,
        required: [true, "Read time is required"],
    },
  },
  { timestamps: true }
); 

let Blog = mongoose.model("Blog", blogSchema);
export default Blog;