import { useParams } from "react-router";
import "./Fact.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchUserById } from "../../features/userSlice";

const Fact = ({ isHomePage, isUserPage }) => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const [facts, setFacts] = useState([]);
  const { selectedUser, status, error } = useSelector((state) => state.users);

  useEffect(() => {
    if (isUserPage && userId) {
      dispatch(fetchUserById(userId));
    }
  }, [isUserPage, userId, dispatch]);

  const fetchBlogs = async () => {
    try {
      const response = isUserPage
        ? await fetch(`http://localhost:8080/api/user/fact/${userId}`)
        : await fetch("http://localhost:8080/api/fact");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("data: ", data);
      let factsData = isUserPage ? data.facts : data;

      setFacts(factsData);
    } catch (error) {
      console.error("Error fetching blogs: ", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [isUserPage, userId]);

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

  if (isUserPage && !selectedUser) {
    return <div>No user data found</div>;
  }

  return (
    <>
      {isHomePage && (
        <div className="container mx-auto px-20 p-5">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-lg">C07 Fact</h2>
            <a href="#">
              <span className="text-blue-600">Xem tất cả</span>
            </a>
          </div>
          <div className="overflow-x-auto pb-4 mt-2">
            <div className="flex space-x-4 fact-container">
              <div className="relative w-32 h-56 rounded-lg overflow-hidden cursor-pointer bg-gray-500 text-white flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center">
                  <button className="bg-white text-blue-500 rounded-full p-2">
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 5a1 1 0 00-1 1v3H6a1 1 0 000 2h3v3a1 1 0 102 0v-3h3a1 1 0 000-2h-3V6a1 1 0 00-1-1z" />
                    </svg>
                  </button>
                  <p className="mt-2 text-sm">Create Story</p>
                </div>
              </div>

              {facts.length !== 0
                ? facts.map((fact, index) => {
                    return (
                      <div
                        key={index}
                        className="relative w-32 h-56 rounded-lg overflow-hidden cursor-pointer"
                      >
                        <img
                          src={
                            fact?.picture
                              ? fact.picture
                              : "https://png.pngtree.com/thumb_back/fh260/background/20210207/pngtree-simple-gray-solid-color-background-image_557027.jpg"
                          }
                          alt="Story Image"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 left-2 w-10 h-10 rounded-full overflow-hidden border-2 border-white">
                          <img
                            src={fact?.user.avatar}
                            alt="Avatar"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-sm">
                          {fact?.user.username}
                        </div>
                      </div>
                    );
                  })
                : ""}
            </div>
          </div>
        </div>
      )}
      {isUserPage && (
        <div className="container mx-auto px-20 p-5">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-lg">Fact đã tạo</h2>
            <a href="#">
              <span className="text-blue-600">Xem tất cả</span>
            </a>
          </div>
          <div className="overflow-x-auto pb-4 mt-2">
            <div className="flex space-x-4 fact-container">
              {facts && facts.length !== 0 ? (
                facts.map((fact, index) => (
                  <div
                    key={index}
                    className="relative w-32 h-56 rounded-lg overflow-hidden cursor-pointer"
                  >
                    <img
                      src={
                        fact.picture
                          ? fact.picture
                          : "https://png.pngtree.com/thumb_back/fh260/background/20210207/pngtree-simple-gray-solid-color-background-image_557027.jpg"
                      }
                      alt="Story Image"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2 w-10 h-10 rounded-full overflow-hidden border-2 border-white">
                      <img
                        src={selectedUser?.avatar}
                        alt="Avatar"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-sm">
                      {selectedUser?.username}
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center mt-4">
                  Không có fact nào được tạo.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Fact;
