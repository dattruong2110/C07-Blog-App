import Header from "../components/header/Header";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/footer/Footer";

const HomeLayout = ({ children, isAuthed }) => {
  return (
    <div className="home-layout">
      <Header />
      <Navbar isAuthed={isAuthed} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default HomeLayout;
