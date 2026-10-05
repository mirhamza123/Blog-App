import { BLOGS_DATA } from "../../data.js";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-10">
        Latest Blogs
      </h1>
      <div className="flex flex-wrap justify-center gap-8">
        {BLOGS_DATA.map((blog) => (
          <div
            key={blog.id}
            className="bg-white w-[300px] rounded-2xl shadow-md blog"
          >
            <img
              src={blog.image_url}
              alt={blog.title}
              className="h-[170px] w-full object-cover rounded-t-2xl"
            />
            <div className="p-4">
              <h2 className="font-bold text-lg text-gray-800 mb-2 truncate">
                {blog.title}
              </h2>
              <div className="flex justify-between">
                <p className="text-sm text-gray-500">
                  By{" "}
                  <span className="font-semibold text-gray-700">
                    {blog.author}
                  </span>
                </p>
                <p className="text-sm text-gray-500">
                  {blog.read_time} min read
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
