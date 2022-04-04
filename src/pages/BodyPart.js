import { useParams, useNavigate } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'
import data from '../data'

export const BodyPart = () => {
	const { body, bodyPart } = useParams()
	const navigate = useNavigate()
	const bodyData = data[body].parts[bodyPart]
	return (
		<main className='body__part container'>
			<div className='row name'>
				<h2>{data[body].name}</h2>
				<div className='return'>
					<HiOutlineArrowNarrowLeft onClick={() => navigate(-1)} />
				</div>
			</div>
			<div className='products__container'>
				<div className='img__container'>
					<img src={`/img/${body}/${bodyData.image}`} alt={bodyPart} />
				</div>
				<div className='product__headline'>
					<h2>{bodyData.name}</h2>
					<p>Uobičajeno lečenje {bodyData.desc}</p>
				</div>

				<div className='product__cards__container'>
					{bodyData.products.map((product, index) => (
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
