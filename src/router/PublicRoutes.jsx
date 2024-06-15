import { Route, Routes } from "react-router";
import HomePage from "../components/home-page/HomePage";
import HomeLayout from "../layouts/HomeLayout";
import LoginPage from "../components/login-page/LoginPage";
import LoginLayout from "../layouts/LoginLayout";
import RegisterPage from "../components/register-page/RegisterPage";
import RegisterLayout from "../layouts/RegisterLayout";
import UserPage from "../components/user-page/UserPage";
import UserLayout from "../layouts/UserLayout";
import Blog from "../components/blog/Blog";
import BlogLayout from "../layouts/BlogLayout";
import FactPage from "../components/fact-page/FactPage";
import FactLayout from "../layouts/FactLayout";
import CreateBlog from "../components/blog/components/createBlog/CreateBlog";

const ROUTE_DATA = [
  { path: "/", element: HomePage, layout: HomeLayout },
  { path: "/login", element: LoginPage, layout: LoginLayout },
  { path: "/register", element: RegisterPage, layout: RegisterLayout },
  { path: "/profile/:userId", element: UserPage, layout: UserLayout },
  { path: "/blog/:id", element: Blog, layout: BlogLayout },
  { path: "/fact", element: FactPage, layout: FactLayout },
  { path: "/blog/create", element: CreateBlog, layout: BlogLayout },
];

const PublicRoutes = ({ isAuthed }) => {
  return (
    <Routes>
      {ROUTE_DATA.map((route, index) => {
        const Layout = route.layout;
        const Page = route.element;
        return (
          <Route
            key={index}
            path={route.path}
            element={
              <Layout {...(isAuthed ? { isAuthed } : {})}>
                <Page />
              </Layout>
            }
          />
        );
      })}
    </Routes>
  );
};

export default PublicRoutes;
