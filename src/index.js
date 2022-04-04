import * as ReactDOMClient from 'react-dom/client'
import React from 'react'
import './index.css'
import App from './App'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

ReactDOMClient.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Router>
			<Routes>
				<Route path='/*' element={<App />} />
			</Routes>
		</Router>
	</React.StrictMode>
)
