import NewsFeedBlog from "../newsfeed-blog/NewsFeedBlog";
import Fact from "../fact/Fact";

const HomePage = () => {
  return (
    <>
      <Fact isHomePage={true} />
      <NewsFeedBlog isHomePage={true} />
    </>
  );
};

export default HomePage;
