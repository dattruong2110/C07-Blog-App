import { useEffect, useState } from "react";
import "./UserPageProfile.css";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchUserById } from "../../features/userSlice";

const UserPageProfile = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const { selectedUser, status, error } = useSelector((state) => state.users);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    if (userId) {
      dispatch(fetchUserById(userId));
    }
  }, [userId, dispatch]);

  useEffect(() => {
    if (selectedUser) {
      setBlogs(selectedUser.blogs);
    }
  }, [selectedUser]);

  if (status === "loading") {
    return (
      <div className="spinner-container">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  if (!selectedUser) {
    return <div>No user data found</div>;
  }

  return (
    <div className="bg-gray-200">
      <div className="p-6 flex flex-col items-center space-y-4">
        <img
          className="h-24 w-24 rounded-full"
          src={selectedUser.avatar}
          alt="Profile"
        />
        <div>
          <h1 className="text-2xl font-bold">{selectedUser.fullName}</h1>
        </div>
      </div>

      <div className="gap-6 flex justify-center pb-6">
        <div>
          <p className="text-gray-500 inline">
            Posts:{" "}
            <h2 className="text-lg text-gray-800 font-semibold inline">
              {blogs?.length || 0}
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
              {blogs?.like || 0}
            </h2>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserPageProfile;
