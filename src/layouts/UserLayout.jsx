import Header from "../components/header/Header";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/footer/Footer";

const UserLayout = ({ children }) => {
  return (
    <div className="user-layout">
      <Header />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default UserLayout;
