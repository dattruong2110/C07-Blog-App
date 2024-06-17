import { Route, Routes } from "react-router";
import DashboardPage from "../components/dashboard-page/DashboardPage.jsx";
import DashboardLayout from "../layouts/DashboardLayout.jsx";
import UserDashboardPage from "../components/dashboard-page/user/UserDashboardPage.jsx";

const PRIVATE_ROUTE_DATA = [
  { path: "/dashboard", element: DashboardPage, layout: DashboardLayout },
  {
    path: "/dashboard/users",
    element: UserDashboardPage,
    layout: DashboardLayout,
  },
];

const PrivateRoutes = () => {
  return (
    <Routes>
      {PRIVATE_ROUTE_DATA.map((route, index) => {
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
