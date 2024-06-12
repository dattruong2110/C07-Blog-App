import { useEffect, useState } from "react";
import "./UserPageProfile.css";
import { useSelector } from "react-redux";

const UserPageProfile = () => {
  const [blogs, setBlogs] = useState([]);
  const auth = useSelector((state) => state.auth);
  const userId =
    (auth.user ? auth.user.id : null) || (auth.user ? auth.user.data.id : null);

  const fetchBlogs = async () => {
    try {
      const response = await fetch(`http://localhost:8080/api/user/${userId}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      let blogsData = data.blogs;

      setBlogs(blogsData);
    } catch (error) {
      console.error("Error fetching blogs: ", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [userId]);

  return (
    <div className="bg-gray-200">
      <div className="p-6 flex flex-col items-center space-y-4">
        <img
          className="h-24 w-24 rounded-full"
          src={auth.user.avatar || auth.user.data.avatar}
          alt="Profile"
        />
        <div>
          <h1 className="text-2xl font-bold">
            {auth.user.fullName || auth.user.data.fullName}
          </h1>
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
