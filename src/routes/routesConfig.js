import HomePage from '../pages/HomePage';
import PersonPage from '../pages/PersonPage';
import ErrorPage from '../pages/ErrorPage';

let routesConfig = [
    {
        path: "/",
        element: HomePage
    },
    {
        path: "/:id",
        element: PersonPage
    },
    {
        path: "*",
        element: ErrorPage
    }
];

export default routesConfig;

