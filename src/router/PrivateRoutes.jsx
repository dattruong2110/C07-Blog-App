import { Route, Routes } from "react-router";
import DashboardLayout from "../layouts/DashboardLayout";
import UserDashboardPage from "../components/dashboard-page/UserDashboardPage";

const ROUTE_DATA = [
  { path: "/dashboard", element: UserDashboardPage, layout: DashboardLayout },
];

const PrivateRoutes = () => {
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

export default PrivateRoutes;
