import React from "react";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { Layout } from '../components/Layout';
import useToken from "../jwt/useToken";
import { Login } from "../pages/Auth/Login";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import { UserCreationForm } from "../pages/User/Components/UserCreationForm";
import { UserList } from "../pages/User/Components/UserList";

export const RouterApp: React.FC = () => {
  const { isAuthenticated } = useToken(); // Use token hook

  const router = createBrowserRouter([
    {
      path: "/login",
      element: isAuthenticated() ? <Navigate to="/dashboard" replace /> : <Login />,
      index: true,
    },
    {
      path: "/",
      element: isAuthenticated() ? <Navigate to="/dashboard" replace /> : <Navigate to="/login" replace />,
    },
    {
      path: "/dashboard",
      element: isAuthenticated() ? <Layout /> : <Navigate to="/login" replace />,
      children: [
        {
          children: [
            {
              index: true,
              element: <Home />,
            },
            {
              path: "manage-user/user",
              element: <UserList />,
            },
            {
              path: "manage-user/create-user",
              element: <UserCreationForm />,
            },
            {
              path: "*",
              element: <p>403 Forbidden Error</p>,
            },
          ],
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
};
