import { Route, Routes } from "react-router";
import HomePage from "../components/home-page/HomePage";
import UserLayout from "../layouts/UserLayout";
import FactPage from "../components/fact-page/FactPage";

const ROUTE_DATA = [
  { path: "/", element: HomePage, layout: UserLayout },
  {path: "/fact", element: FactPage, layout: UserLayout}
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
