import { createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "../components/auth/ProtectedRoute";
import { MainLayout } from "../layouts/MainLouyout";

import { SearchPage } from "../pages/SearchPage";
import { NotFoundPage} from "../pages/NotFoundPage"
import { HomePages } from "../pages/HomePages";
import { FavoritesPage } from "../pages/FavoritesPage";
import { ProfilePage } from "../pages/ProfilePage";
import { LoginPage } from "../pages/LoginPage";
import { BookingLayout } from "../layouts/BookingLayout";
import { Booking } from "../pages/Booking";
import { PropertyDetailPage } from "../pages/PropertyDetailPage";
import { RegisterPage } from "../pages/RegisterPage";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: <HomePages /> },
            { path:"search", element: <SearchPage />},
            { 
                path: "favorites", 
                element: (
                    <ProtectedRoute>
                        <FavoritesPage /> 
                    </ProtectedRoute>
                ),
            },
            { 
                path: "profile", 
                element: (
                    <ProtectedRoute>
                        <ProfilePage />
                    </ProtectedRoute>
                ),
             },
            { path: "login", element: <LoginPage /> },
            { path: "register", element: <RegisterPage />},
            { path: "properties/:id", element: <PropertyDetailPage />},
            { 
                path: "booking", 
                element: (
                    <ProtectedRoute>
                        <BookingLayout />
                    </ProtectedRoute>
                ),
                children: [{path: ":id", element: <Booking />}],
            },
            { path:"*",  element:<NotFoundPage /> },
        ],
    },
]);