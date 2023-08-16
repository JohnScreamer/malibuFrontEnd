import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/layouts/mainLayout/MainLayout.js";
import AboutUs from "../pages/AboutUs.js";
import Article from "../pages/Article.js";
import Articles from "../pages/Articles.js";
import Cart from "../pages/Cart.js";
import Catalog from "../pages/Catalog.js";
import CatalogSearch from "../pages/CatalogSearch.js";
import ErrorPage from "../pages/Error.js";
import Favorite from "../pages/Favorite.js";
import Home from "../pages/Main.js";
import Orders from "../pages/Orders.js";
import Product from "../pages/Product.js";
import Profile from "../pages/Profile.js";
import Search from "../pages/Search.js";
import { PrivateRoute } from "./PrivateRoute.js";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/product/:id", element: <Product /> },
            { path: "/catalog", element: <Catalog /> },
            { path: "/cart", element: <Cart /> },
            { path: "/catalog/:id", element: <CatalogSearch /> },
            { path: "/search", element: <Search /> },
            { path: "/aboutUs", element: <AboutUs /> },
            {
                path: "/favorite",
                element: (
                    <PrivateRoute>
                        <Favorite />
                    </PrivateRoute>
                ),
            },
            {
                path: "/orders",
                element: (
                    <PrivateRoute>
                        <Orders />
                    </PrivateRoute>
                ),
            },
            {
                path: "/profile",
                element: (
                    <PrivateRoute>
                        <Profile />
                    </PrivateRoute>
                ),
            },
            {
                path: "/article/:id",
                element: <Article />,
            },
            {
                path: "/article",
                element: <Articles />,
            },
        ],

        errorElement: <ErrorPage />,
    },
]);
