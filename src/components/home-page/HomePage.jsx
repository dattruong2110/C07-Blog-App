import NewsFeedBlog from "../newsfeed-blog/NewsFeedBlog";
import HomePageFact from "../fact/Fact";

const HomePage = () => {
  return (
    <>
      <HomePageFact isHomePage={true} />
      <NewsFeedBlog isHomePage={true} />
    </>
  );
};

export default HomePage;
