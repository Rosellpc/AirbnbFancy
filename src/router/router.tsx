import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../layouts/MainLouyout";

import { SearchPage } from "../pages/SearchPage";
import { NotFoundPage} from "../pages/NotFoundPage"
import { HomePages } from "../pages/HomePages";
import { FavoritesPage } from "../pages/FavoritesPage";
import { ProfilePage } from "../pages/ProfilePage";
import { LoginPage } from "../pages/LoginPage"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: <HomePages /> },
            { path:"search", element: <SearchPage />},
            { path: "favorites", element: <FavoritesPage />},
            { path: "profile", element: <ProfilePage /> },
            { path: "login", element: <LoginPage /> },
            { path:"*",  element:<NotFoundPage /> },
        ],
    },
]);