import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-amber-700 text-white p-10 flex justify-between items-center">
      <Link to="/">
        <h1 className="text-4xl font-bold">Blog App</h1>
      </Link>
      <ul className="flex gap-6 font-semibold text-xl">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/new-blog">
          <li>Add Blog</li>
        </Link>
      </ul>

      <ul className="flex gap-1 font-semibold text-xl">
        <Link to="/login">
          <li>Login</li>
        </Link>
        /
        <Link to="/register">
          <li>Register</li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
