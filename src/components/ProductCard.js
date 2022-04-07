import { Link } from 'react-router-dom'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

const ProductCard = ({
	name,
	purpose = 'Proverite desjtvo leka klikom na link.',
	image = 'default.png',
	link,
	path
}) => {
	return (
		<div className='product__card row'>
			<div className='product__left'>
				<div className='product__head'>
					<h3>{name}</h3>
				</div>

				<div className='product__body'>
					<p>{purpose.slice(0, 40)}...</p>
				</div>
				<div className='product__footer'>
					<Link to={link} className='row'>
						DETALJNIJE <HiOutlineArrowNarrowRight />
					</Link>
				</div>
			</div>

			<div className='product__right'>
				<div className='img__wrapper'>
					<img src={`${path}${image}`} alt={name} />
				</div>
			</div>
		</div>
	)
}

export default ProductCard
