import { useEffect, useState } from "react";
import "./NewsFeddBlog.css";
import { useSelector } from "react-redux";

const NewsFeedBlog = ({ isHomePage, isUserPage }) => {
  const [blogs, setBlogs] = useState([]);
  const [quickViewPosts, setQuickViewPosts] = useState([]);
  const auth = useSelector((state) => state.auth);
  const userId =
    (auth.user ? auth.user.id : null) || (auth.user ? auth.user.data.id : null);

  console.log("auth: ", auth);
  console.log("userId: ", userId);

  const fetchBlogs = async () => {
    try {
      const response = isUserPage
        ? await fetch(`http://localhost:8080/api/user/${userId}`)
        : await fetch("http://localhost:8080/api/blog");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      let blogsData = isUserPage ? data.blogs : data;
      const shuffledData = [...blogsData];
      shuffleArray(shuffledData);

      setBlogs(blogsData);
      setQuickViewPosts(shuffledData.slice(0, 8));
    } catch (error) {
      console.error("Error fetching blogs: ", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [isUserPage, userId]);

  const shuffleArray = (array) => {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
  };

  return (
    <div className="container mx-auto px-20 pb-5">
      {isHomePage && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-2">
            {blogs.length !== 0
              ? blogs?.map((blog, index) => (
                  <a href="/" key={index}>
                    <div className="blog-container bg-white p-4 rounded shadow mt-4">
                      <img
                        src={blog.picture}
                        alt={blog.title}
                        className="blog-image w-64 h-auto object-cover rounded mr-4"
                      />
                      <div className="blog-details flex flex-col justify-between">
                        <div>
                          <h2 className="text-xl font-bold mb-3">
                            {blog.title}
                          </h2>
                          <p>{blog.content}</p>
                        </div>
                        <span className="font-medium">
                          {blog.user?.username}
                        </span>
                      </div>
                    </div>
                  </a>
                ))
              : ""}
          </div>

          <div className="quick-view-posts-container">
            <div className="bg-white p-4 rounded shadow overflow-y-auto mt-4">
              <h2 className="text-xl font-bold mb-4">Xem nhanh</h2>
              <ul>
                {quickViewPosts.length !== 0
                  ? quickViewPosts?.map((post, index) => (
                      <a href="/" key={index}>
                        <li className="flex items-center mb-4">
                          <span className="quick-view-title mr-4 font-semibold">
                            {post.title}
                          </span>
                          <img
                            src={post.picture}
                            alt={post.title}
                            className="quick-view-picture w-12 h-12 object-cover rounded"
                          />
                        </li>
                      </a>
                    ))
                  : ""}
              </ul>
            </div>
          </div>
        </div>
      )}
      {isUserPage && (
        <div className="grid gap-4">
          <div className="col-span-2">
            {blogs.length !== 0
              ? blogs.map((blog, index) => (
                  <a href="/" key={index}>
                    <div className="blog-container bg-white p-4 rounded shadow mt-4">
                      <img
                        src={blog.picture}
                        alt={blog.title}
                        className="blog-image w-64 h-auto object-cover rounded mr-4"
                      />
                      <div className="blog-details flex flex-col justify-between">
                        <div>
                          <h2 className="text-xl font-bold mb-3">
                            {blog.title}
                          </h2>
                          <p>{blog.content}</p>
                        </div>
                        <span className="font-medium">
                          {auth.user.username || auth.user.data.username}
                        </span>
                      </div>
                    </div>
                  </a>
                ))
              : ""}
          </div>
        </div>
      )}
    </div>
  );
};

export default NewsFeedBlog;
