import { useEffect } from 'react'
import {
	Home,
	Head,
	Hands,
	Chest,
	Legs,
	Product,
	Search,
	Blogs,
	NotFound,
	BodyPart
} from './pages'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'

const App = () => {
	useEffect(() => {
		document.body.style.backgroundImage = 'url(/img/bg-3.png)'
	}, [])

	return (
		<>
			<Header />
			<Routes>
				<Route index element={<Home />} />
				<Route path='/glava' element={<Head />} />
				<Route path='/ruke' element={<Hands />} />
				<Route path='/torzo' element={<Chest />} />
				<Route path='/noge' element={<Legs />} />
				<Route path='/:body/:bodyPart' element={<BodyPart />} />
				<Route path='/:body/:bodyPart/:index' element={<Product />} />
				<Route path='/search/:search' element={<Search />} />
				<Route path='/blogs' element={<Blogs />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</>
	)
}

export default App
