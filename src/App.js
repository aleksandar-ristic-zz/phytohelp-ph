import { useEffect } from 'react'
import {
	Home,
	Head,
	Hands,
	Torso,
	Legs,
	Product,
	SearchProducts,
	About,
	NotFound,
	BodyPart,
	Contact
} from './pages'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'

const App = () => {
	useEffect(() => {
		document.body.style.backgroundImage = 'url(/img/bg.png)'
	}, [])

	return (
		<>
			<Header />
			<Routes>
				<Route index element={<Home />} />
				<Route path='/glava' element={<Head />} />
				<Route path='/ruka' element={<Hands />} />
				<Route path='/torzo' element={<Torso />} />
				<Route path='/noge' element={<Legs />} />
				<Route path='/:body/:bodyPart' element={<BodyPart />} />
				<Route path='/:body/:bodyPart/:index' element={<Product />} />
				<Route path='/search-products' element={<SearchProducts />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/about' element={<About />} />
				<Route path='*' element={<NotFound />} />
			</Routes>
		</>
	)
}

export default App
