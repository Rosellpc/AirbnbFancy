import { lazy, Suspense } from "react";
import type { ComponentType, ReactElement } from "react";
import { Link } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "../components/auth/ProtectedRoute";
import { MainLayout } from "../layouts/MainLayout";
import { BookingLayout } from "../layouts/BookingLayout";
import { propertyDetailLoader } from "../loaders/propertyDetailLoader";



const  SearchPage = lazy(() => import ("../pages/SearchPage"));
const  NotFoundPage= lazy(() => import ("../pages/NotFoundPage"));
const  HomePages = lazy(() => import ("../pages/HomePages"));
const  FavoritesPage = lazy(() => import ("../pages/FavoritesPage"));
const  ProfilePage = lazy(() => import ("../pages/ProfilePage"));
const  LoginPage = lazy(() => import ("../pages/LoginPage"));
const  Booking = lazy(() => import ("../pages/Booking"));
const  PropertyDetailPage = lazy(() => import ("../pages/PropertyDetailPage"));
const  RegisterPage = lazy(() => import ("../pages/RegisterPage"));
const  RouteErrorPage = lazy(() => import ("../pages/RouteErrorPage"));

function withSuspense(Component: ComponentType): ReactElement {
    return (
        <Suspense fallback={<p className="main-content">Cargando página...</p>}>
            <Component />
        </Suspense>
    ); 
}

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: withSuspense(HomePages) },
            { path:"search", element: withSuspense(SearchPage) },
            { 
                path: "favorites", 
                element: (
                    <ProtectedRoute>
                        {withSuspense(FavoritesPage)} 
                    </ProtectedRoute>
                ),
            },
            { 
                path: "profile", 
                element: (
                    <ProtectedRoute>
                        {withSuspense(ProfilePage)}
                    </ProtectedRoute>
                ),
             },
            { path: "login", element: withSuspense(LoginPage) },
            { path: "register", element: withSuspense(RegisterPage)},
            { 
                path: "properties/:id", 
                element: withSuspense(PropertyDetailPage),
                loader: propertyDetailLoader,
                errorElement: withSuspense(RouteErrorPage)
            },
            { 
                path: "booking", 
                element: (
                    <ProtectedRoute>
                        {withSuspense(BookingLayout)}
                    </ProtectedRoute>
                ),
                children: [{path: ":id", element: withSuspense(Booking)}],
            },
            { path:"*",  element: withSuspense(NotFoundPage) },
        ],
    },
]);