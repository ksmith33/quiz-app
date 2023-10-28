import React from 'react'
import ReactDOM from 'react-dom/client'
import {
	createBrowserRouter,
	redirect,
	RouterProvider,
} from "react-router-dom"
import './index.css'
import Home from './Routes/home/home.component'
import Authentication from './Routes/authentication/authentication.component'
import Account from './Routes/account/account.component'
import History from './Routes/history/history.component'
import Settings from './Routes/settings/settings.component'
import Category from './Routes/category/category.component'
import Quiz from './Routes/quiz/quiz.component'
import Header from './Routes/header/header.component'

//need to add protected route
const router = createBrowserRouter([
	{
		path: "/",
		element: <Header />,
		children: [
			{
				path: "/",
				element: <Home />
			},
			{
				path: "/account",
				element: <Account />,
				children: [
					{
						index: true,
						loader: () => redirect('/account/settings')
					},
					{
						path:"settings",
						element: <Settings />
					},
					{
						path:"history",
						element:<History />
					}
				]
			},
			{
				path: "/category/:categoryName",
				element: <Category />
			},
			{
				path: "/quiz/:quizId",
				element: <Quiz/>
			}
		]
	},
	{
		path: "/auth",
		element: <Authentication />
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
