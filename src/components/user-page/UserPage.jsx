import HomePageFact from "../fact/Fact";
import NewsFeedBlog from "../newsfeed-blog/NewsFeedBlog";
import "./UserPage.css";

const UserPage = () => {
  return (
    <div className="container mx-auto px-20 pb-5">
      <HomePageFact isUserPage={true} />
      <NewsFeedBlog isUserPage={true} />
    </div>
  );
};

export default UserPage;
