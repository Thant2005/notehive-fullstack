import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import NoteList from "../components/NoteList";
import SignUp from "../pages/SignUp";

function NoteHiveRouter() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <NoteList /> },
        {
          path: "/note-list",
          element: <Home />,
        },
      ],
    },
    {
      path: "sign-In",
      element: <SignIn />,
    },
    {
      path: "sign-up",
      element: <SignUp />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default NoteHiveRouter;
