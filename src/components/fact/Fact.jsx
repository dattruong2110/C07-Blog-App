import "./Fact.css";

const HomePageFact = ({ isHomePage, isUserPage }) => {
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

              <div className="relative w-32 h-56 rounded-lg overflow-hidden cursor-pointer">
                <img
                  src="https://modikiyojana.in/wp-content/uploads/2024/05/manchester-united-9.jpg"
                  alt="Story Image"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 left-2 w-10 h-10 rounded-full overflow-hidden border-2 border-white">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/vi/a/a1/Man_Utd_FC_.svg"
                    alt="Avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-sm">
                  Username
                </div>
              </div>
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
              <div className="relative w-32 h-56 rounded-lg overflow-hidden cursor-pointer">
                <img
                  src="https://modikiyojana.in/wp-content/uploads/2024/05/manchester-united-9.jpg"
                  alt="Story Image"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 left-2 w-10 h-10 rounded-full overflow-hidden border-2 border-white">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/vi/a/a1/Man_Utd_FC_.svg"
                    alt="Avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 text-sm">
                  Username
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HomePageFact;
