import { Route, Routes } from "react-router";
import { PRIVATE_ROUTE_DATA } from "../utils/AppContants";

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
