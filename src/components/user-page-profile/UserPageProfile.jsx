import { useEffect, useState } from "react";
import "./UserPageProfile.css";

const UserPageProfile = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/blog");
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs: ", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="bg-gray-200">
      <div className="p-6 flex flex-col items-center space-y-4">
        <img
          className="h-24 w-24 rounded-full"
          src="https://hoanghamobile.com/tin-tuc/wp-content/uploads/2023/12/songoku-2.jpg"
          alt="Profile"
        />
        <div>
          <h1 className="text-2xl font-bold">Trương Đạt</h1>
        </div>
      </div>

      <div className="gap-6 flex justify-center pb-6">
        <div>
          <p className="text-gray-500 inline">
            Posts:{" "}
            <h2 className="text-lg text-gray-800 font-semibold inline">
              {blogs.length}
            </h2>
          </p>
        </div>
        <div>
          <h1>|</h1>
        </div>
        <div>
          <p className="text-gray-500 inline">
            Likes:{" "}
            <h2 className="text-lg text-gray-800 font-semibold inline">
              35,931
            </h2>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserPageProfile;
