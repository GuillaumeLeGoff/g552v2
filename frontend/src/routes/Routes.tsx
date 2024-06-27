import { loginRoutes } from "@/features/auth";
import { Root } from "@/routes";
import { Navigate, Outlet } from "react-router-dom";

const routes = (hasToken: boolean) => [
  {
    path: "/",
    element: hasToken ? (
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

export default routes;
