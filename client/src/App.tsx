import React from "react";
import "./App.css";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./Components/Navbar/Header";
import Index from "./Pages/Index";

// pages

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

const route = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Index/>,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={route} />
    </div>
  );
}

export default App;
