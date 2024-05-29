import DashboardLayout from "../layouts/DashboardLayout";
import UserDashboardPage from "../components/dashboard-page/UserDashboardPage";
import DashboardPage from "../components/dashboard-page/DashboardPage";

export const PRIVATE_ROUTE_DATA = [
  { path: "/dashboard", element: DashboardPage, layout: DashboardLayout },
  {
    path: "/dashboard/user",
    element: UserDashboardPage,
    layout: DashboardLayout,
  },
];
