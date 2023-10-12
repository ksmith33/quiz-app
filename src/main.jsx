import React from 'react'
import ReactDOM from 'react-dom/client'
import {
	createBrowserRouter,
	RouterProvider,
} from "react-router-dom"
import './index.css'
import Dashboard from './Routes/dashboard/dashboard.component.jsx'
import Authentication from './Routes/authentication/authentication.component'
import Profile from './Routes/profile/profile.component'
import Settings from './Routes/settings/settings.component'
import Category from './Routes/category/category.component'
import Quiz from './Routes/quiz/quiz.component'

const router = createBrowserRouter([
	{
		path: "/",
		element: <Dashboard />
	},
	{
		path: "/auth",
		element: <Authentication />
	},
	{
		path: "/profile",
		element: <Profile />
	},
	{
		path: "/settings",
		element: <Settings />
	},
	{
		path: "/category/:categoryName",
		element: <Category />
	},
	{
		path: "/quiz/:quizId",
		element: <Quiz/>
	}
	
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
