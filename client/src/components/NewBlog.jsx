import React, { useState } from "react";

function NewBlog() {
  const [blogData, setBlogData] = useState({});

  function HandleSubmit(evt) {
    evt.preventDefault();
    const newBlog = {
      title: evt.target.title.value,
      description: evt.target.description.value,
      imageUrl: evt.target.image.value,
      author: evt.target.author.value,
      readTime: evt.target.read_time.value,
    };

    setBlogData(newBlog);
    evt.target.reset();
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <form
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md space-y-6"
        onSubmit={(event) => HandleSubmit(event)}
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Create New Blog
        </h2>

        {/* Title */}
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Description */}
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Description
          </label>
          <input
            type="text"
            id="description"
            name="description"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Image URL */}
        <div>
          <label
            htmlFor="image"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Image URL
          </label>
          <input
            type="url"
            id="image"
            name="image"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Author */}
        <div>
          <label
            htmlFor="author"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Author
          </label>
          <input
            type="text"
            id="author"
            name="author"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Read Time */}
        <div>
          <label
            htmlFor="read_time"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Read Time (minutes)
          </label>
          <input
            type="number"
            id="read_time"
            name="read_time"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <button
            type="submit"
            className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
          >
            Add Blog
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewBlog;
