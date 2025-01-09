import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Dashboard from "../pages/admin/Dashboard";
import Mahasiswa from "../pages/admin/Mahasiswa";
import AdminLayout from "../layouts/AdminLayout";
import NotFound from "../pages/NotFound";
import CreateMahasiswa from "../pages/admin/CreateMahasiswa";
import UpdateMahasiswa from "../pages/admin/UpdateMahasiswa";
import ProtectedRoute from "./ProtectedRoute";

const RouteList = createBrowserRouter([
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "mahasiswa",
        element: <Mahasiswa />,
      },
      {
        path: "mahasiswa/create",
        element: <CreateMahasiswa />,
      },
      {
        path: "mahasiswa/edit/:id",
        element: <UpdateMahasiswa />,
      },
    ],
  },
]);
export default RouteList;
