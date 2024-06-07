import { Route, Routes } from "react-router";
import HomePage from "../components/home-page/HomePage";
import HomeLayout from "../layouts/HomeLayout";
import LoginPage from "../components/login-page/LoginPage";
import LoginLayout from "../layouts/LoginLayout";
import RegisterPage from "../components/register-page/RegisterPage";
import RegisterLayout from "../layouts/RegisterLayout";
import UserPage from "../components/user-page/UserPage";
import UserLayout from "../layouts/UserLayout";

const ROUTE_DATA = [
  { path: "/", element: HomePage, layout: HomeLayout },
  { path: "/login", element: LoginPage, layout: LoginLayout },
  { path: "/register", element: RegisterPage, layout: RegisterLayout },
  { path: "/profile", element: UserPage, layout: UserLayout },
];

const PublicRoutes = () => {
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
              <Layout>
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
