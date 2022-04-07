import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'
import { FaTimes, FaSearch } from 'react-icons/fa'
import data from '../data'

export const BodyPart = () => {
	const { body, bodyPart } = useParams()
	const bodyData = data[body].parts[bodyPart]

	const [products, setProducts] = useState(bodyData.products)
	const [searchText, setSearchText] = useState('')
	const [isOpen, setIsOpen] = useState(false)
	const navigate = useNavigate()

	useEffect(() => {
		if (!searchText) {
			setProducts(bodyData.products)
		} else {
			setProducts(
				bodyData.products.filter(product => {
					return product.name.toLowerCase().includes(searchText.toLowerCase())
				})
			)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [searchText])

	return (
		<main className='body__part container'>
			<div className='products__container'>
				<div className='product__headline'>
					<h2>{bodyData.name}</h2>
					<p>Uobičajeno lečenje {bodyData.desc}</p>
				</div>

				<div className='img__container'>
					<img src={`/img/${body}/${bodyData.image}`} alt={bodyPart} />
				</div>

				<div className='row name'>
					<h2>{data[body].name}</h2>
					<div className='row controls'>
						<button
							onClick={() => setIsOpen(prev => !prev)}
							className='flex-center'
						>
							{isOpen ? (
								<FaTimes className='search-icon' />
							) : (
								<FaSearch className='search-icon' />
							)}
						</button>
						<div className='return flex-center'>
							<HiOutlineArrowNarrowLeft onClick={() => navigate(-1)} />
						</div>
					</div>
				</div>
				<div className='flex-center search-container'>
					<div className={isOpen ? 'show' : ''}>
						<label className='offscreen' htmlFor='search'>
							Pretražite delove tela ili preparate
						</label>
						<input
							type='search'
							name='search'
							id='search'
							placeholder='Pretražite delove tela'
							autoComplete='off'
							value={searchText}
							onChange={e => setSearchText(e.target.value)}
						/>
						<FaSearch className='icon' />
					</div>
				</div>
				<div className='product__cards__container'>
					{products.map((product, index) => (
						<ProductCard
							key={index}
							{...product}
							link={`/${body}/${bodyPart}/${index}`}
							path={`/img/${body}/`}
						/>
					))}
				</div>
			</div>
		</main>
	)
}
