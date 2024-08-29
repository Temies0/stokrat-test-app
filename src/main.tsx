import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './globals/fonts/stylesheet.css'
import './globals/styles/main.scss'
import './globals/styles/reset.css'
import './globals/styles/telegram.css'
import ChanceOfFallingPage from './pages/chance_falling/ChanceOfFallingPage'
import MainPage from './pages/main/MainPage'
import TasksPage from './pages/tasks/TasksPage'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		{/* <ChanceOfFallingPage /> */}
		{/* <MainPage /> */}
		{/* <TasksPage /> */}
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<MainPage />} />
				<Route path='/tasks' element={<TasksPage />} />
				<Route path='/chances' element={<ChanceOfFallingPage />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>
)
