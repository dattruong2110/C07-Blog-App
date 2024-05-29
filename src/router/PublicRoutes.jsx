import { Route, Routes } from "react-router";
import HomePage from "../components/home-page/HomePage";
import UserLayout from "../layouts/UserLayout";
import LoginPage from "../components/login-page/LoginPage";
import LoginLayout from "../layouts/LoginLayout";
import RegisterPage from "../components/register-page/RegisterPage";
import RegisterLayout from "../layouts/RegisterLayout";

const ROUTE_DATA = [
  { path: "/", element: HomePage, layout: UserLayout },
  { path: "/login", element: LoginPage, layout: LoginLayout },
  { path: "/register", element: RegisterPage, layout: RegisterLayout },
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
