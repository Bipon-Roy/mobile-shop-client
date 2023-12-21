import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./Pages/Home/Home/Home.jsx";
import AllProducts from "./Pages/AllProducts/AllProducts.jsx";
import Error from "./Pages/ErrorPage/Error.jsx";
import ProductDetails from "./Pages/ProductDetails/ProductDetails.jsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/products",
                element: <AllProducts />,
            },
            {
                path: "/phoneDetails/:id",
                element: <ProductDetails />,
                loader: ({ params }) => fetch(`http://localhost:5000/phones/${params.id}`),
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    </React.StrictMode>
);
