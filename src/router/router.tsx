import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { SearchPage } from "../pages/SearchPage";
import { NotFoundPage} from "../pages/NotFoundPage"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />
    },
    {
        path:"/search",
        element: <SearchPage />,
    },
    {
        path:"*",
        element:<NotFoundPage />,
    }
])