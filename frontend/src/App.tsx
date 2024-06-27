import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { routes } from "@/routes";

const App = () => {
  const [hasToken, setHasToken] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setHasToken(!!token);
  }, []);

  const router = createBrowserRouter(routes(hasToken));

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
