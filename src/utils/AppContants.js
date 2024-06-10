import DashboardLayout from "../layouts/DashboardLayout";
import DashboardPage from "../components/dashboard-page/DashboardPage";
import UserDashboardPage from "../components/dashboard-page/UserDashboardPage";

export const PRIVATE_ROUTE_DATA = [
  { path: "/dashboard", element: DashboardPage, layout: DashboardLayout },
  {
    path: "/dashboard/users",
    element: UserDashboardPage,
    layout: DashboardLayout,
  },
];
