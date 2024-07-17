import { createRoot } from 'react-dom/client';
import { App } from './features/components/App';
import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";
import { Shop } from './pages/Shop';
import { About } from './pages/About';


const router = createBrowserRouter([
    {
        path: '/',
        element: (<App />),
        // todo what is this?
        children: [
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'shop',
                element: <Shop />
            }
        ]
    },
])

const root = document.getElementById('root')

createRoot(root).render(<RouterProvider router={router} />);
