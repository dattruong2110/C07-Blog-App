import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

const BlogLayout = ({ children }) => {
  return (
    <div className="home-layout">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default BlogLayout;