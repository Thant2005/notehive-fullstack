import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";

function NoteHiveRouter() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [{ index: true, element: <Home /> }],
    },
    {
      path: "sign-In",
      element: <SignIn />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default NoteHiveRouter;
