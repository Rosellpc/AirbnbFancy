import { createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "../components/auth/ProtectedRoute";
import { MainLayout } from "../layouts/MainLouyout";

import { SearchPage } from "../pages/SearchPage";
import { NotFoundPage} from "../pages/NotFoundPage"
import { HomePages } from "../pages/HomePages";
import { FavoritesPage } from "../pages/FavoritesPage";
import { ProfilePage } from "../pages/ProfilePage";
import { LoginPage } from "../pages/LoginPage";
import { BookingPage } from "../pages/BookingPage";
import { BookingLayout } from "../layouts/BookingLayout";
import { Booking } from "../pages/Booking";
import { PropertyDetailPage } from "../pages/PropertyDetailPage";


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
            { path: "properties/:id", element: <PropertyDetailPage />},
            { path: "booking", element: <BookingLayout />,
                children: [{path: ":id", element: <Booking />}],
            },
            { path: "bookingTest", element: <BookingPage />},
            { path:"*",  element:<NotFoundPage /> },
        ],
    },
]);