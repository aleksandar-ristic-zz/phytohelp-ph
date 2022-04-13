import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { FaSearch, FaTimes } from 'react-icons/fa'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'
import ProductCard from '../components/ProductCard'
import data from '../data'

let regije = []
let regijeBtn = []
let sviPreparati = []
for (let deo in data) {
	regijeBtn.push(data[deo].id)
	regije.push(data[deo].parts)
}
for (let i = 0; i < regije.length; i++) {
	for (let deo in regije[i]) {
		sviPreparati.push(...regije[i][deo].products)
	}
}

const deloviRegije = []
for (let deo in data['glava'].parts) {
	deloviRegije.push(deo)
}

export const SearchProducts = () => {
	const [products, setProducts] = useState([])
	const [searchText, setSearchText] = useState('')
	const [body, setBody] = useState('glava')
	const [bodyPart, setBodyPart] = useState('čelo')
	const [partsBtn, setPartsBtn] = useState(deloviRegije)
	const [isOpen, setIsOpen] = useState(false)

	const searchRef = useRef()
	const navigate = useNavigate()

	const handleSearch = () => {
		setProducts(data[body].parts[bodyPart].products)
	}

	useEffect(() => {
		setProducts(prev => [])
		setPartsBtn(prev => [])
		setSearchText('')
		for (let deo in data[body].parts) {
			setPartsBtn(prev => [...prev, deo])
		}
	}, [body])

	useEffect(() => {
		if (isOpen) {
			searchRef.current.focus()
		}
	}, [isOpen])

	return (
		<main className='search__container container'>
			<div className='headline flex-center'>
				<h2>Preparati</h2>
				<p>Pretraga svih {sviPreparati.length} preparata.</p>
			</div>

			<div className='img__container flex-center'>
				<img src='/img/search.png' alt='pretraga' />
			</div>

			<div className='search__form__wrapper'>
				<div className='search__form'>
					<h3>Regije Tela</h3>
					<div className='search__body row'>
						{regijeBtn.map((deo, index) => (
							<button
								key={index}
								className={body === deo ? 'active' : ''}
								onClick={() => setBody(deo)}
							>
								{deo}
							</button>
						))}
					</div>
					<h3>Delovi Regije</h3>
					<div className='search__body row'>
						{partsBtn.map((deo, index) => (
							<button
								className={bodyPart === deo ? 'active' : ''}
								key={index}
								onClick={() => setBodyPart(deo)}
							>
								{deo}
							</button>
						))}
					</div>

					<button className='submit' onClick={handleSearch}>
						Prikaži
					</button>
				</div>
			</div>

			<div className='links__controls row'>
				<div className='return flex-center'>
					<HiOutlineArrowNarrowLeft onClick={() => navigate(-1)} />
				</div>
				<h2>Početna</h2>
				<button
					onClick={() => setIsOpen(prev => !prev)}
					className='search__btn flex-center'
				>
					{isOpen ? (
						<FaTimes className='search-icon' />
					) : (
						<FaSearch className='search-icon' />
					)}
				</button>
			</div>

			<div className='flex-center search-container'>
				<div className={isOpen ? 'show' : ''}>
					<label className='offscreen' htmlFor='search'>
						Pretražite preparate po nazivu ili opisu
					</label>
					<input
						ref={searchRef}
						type='search'
						name='search'
						id='search'
						placeholder='Pretražite preparate po nazivu ili opisu'
						autoComplete='off'
						value={searchText}
						onChange={e => setSearchText(e.target.value)}
					/>
					<FaSearch className='icon' />
				</div>
			</div>

			<div className='flex-center'>
				<p>
					Prikazano je <strong>{products.length}</strong> preparata.
				</p>
			</div>

			<div className='products__container'>
				<div className='product__cards__container'>
					{products.length === 0 ? (
						<h3 className='no__products'>Promenite parametre.</h3>
					) : (
						products
							.filter(
								product =>
									product.name
										.toLowerCase()
										.includes(searchText.toLowerCase()) ||
									product.desc.toLowerCase().includes(searchText.toLowerCase())
							)
							.map((product, index) => (
								<ProductCard
									key={index}
									{...product}
									link={`/${body}/${bodyPart}/${index}`}
									path={`/img/${body}/`}
								/>
							))
					)}
				</div>
			</div>
		</main>
	)
}
