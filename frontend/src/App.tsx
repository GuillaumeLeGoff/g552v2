import { routes } from "@/routes";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

const App = () => {


  const router = createBrowserRouter(routes());

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
