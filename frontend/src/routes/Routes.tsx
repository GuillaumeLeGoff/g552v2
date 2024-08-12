import { loginRoutes } from "@/features/auth";
import { Root } from "@/routes";
import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "@/stores/authStore";

const Routes = () => {
  const { token } = useAuthStore();


  return [
    {
      path: "/",
      element: token ? (
        <>
          <Outlet />
          <Root />
        </>
      ) : (
        <Navigate to="/login" />
      ),
    },
    {
      path: "/login",
      element: <Outlet />,
      children: loginRoutes,
    },
  ];
};

export default Routes;