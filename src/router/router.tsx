import { Link } from "react-router-dom";
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
import { propertyDetailLoader } from "../loaders/propertyDetailLoader";


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
            { 
                path: "properties/:id", 
                element: <PropertyDetailPage />,
                loader: propertyDetailLoader,
                errorElement: (
                    <main className="property-detail-page">
                        <section className="property-not-found">
                        <h1>Alojamiento no encontrado</h1>
                        <p className="p">La propiedad que buscas no está disponible.</p>
                        <Link className="detail-button" to="/search">
                            <p>Ver otras propiedades</p>
                        </Link>
                        </section>
                    </main>                   
                ),
            },
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