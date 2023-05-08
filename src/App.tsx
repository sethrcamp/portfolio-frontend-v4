import React from 'react';
import './styles/index.scss';
import Header from "./components/Header";
import {Outlet, RouterProvider} from "react-router";
import About from "./pages/About";
import Projects from "./pages/Projects";
import IndustryExperience from "./pages/IndustryExperience";
import Resume from "./pages/Resume";
import {createBrowserRouter} from "react-router-dom";
import Error404 from "./pages/404";

const Layout = () => {
    return <div>
        <Header />
        <div className='pageContainer'>
            <Outlet />
        </div>
    </div>;
};

const router = createBrowserRouter([
    {
        element: <Layout />,
        errorElement: <Error404 />,
        children: [
            {
                path: "/",
                element: <About />
            },{
                path: '/industry-experience',
                element: <IndustryExperience />
            },{
                path: '/projects',
                element: <Projects />
            },{
                path: '/resume',
                element: <Resume />
            }
        ],
    },
]);

const App = () => <RouterProvider router={router} />;

export default App;
