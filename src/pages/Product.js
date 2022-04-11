import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'
import data from '../data'
import { FaSyringe, FaHeartbeat, FaSkullCrossbones } from 'react-icons/fa'

export const Product = () => {
	const { body, bodyPart, index } = useParams()
	const productData = data[body].parts[bodyPart].products[index]
	const navigate = useNavigate()
	return (
		<main className='product container'>
			<div className='links__controls row'>
				<div className='return flex-center' onClick={() => navigate(-1)}>
					<HiOutlineArrowNarrowLeft />
				</div>
				<h2>{data[body].parts[bodyPart].name}</h2>
			</div>

			<div className='product-container'>
				<div className='img-container'>
					{productData.image ? (
						<img
							src={`/img/${body}/${productData.image}`}
							alt={productData.name}
						/>
					) : (
						<img src={`/img/${body}/default.png`} alt={productData.name} />
					)}
				</div>

				<div className='text-container'>
					<div className='headline'>
						<h2>{productData.name}</h2>
						<p>{productData.desc}</p>
					</div>

					<div className='body'>
						{productData?.purpose && (
							<div className='purpose'>
								<h3 className='row'>
									Namena <FaHeartbeat />
								</h3>
								<p>{productData.purpose}</p>
							</div>
						)}

						{productData?.effects && (
							<div className='effects'>
								<h3 className='row'>
									Dejstvo
									<FaSyringe />
								</h3>
								<p>{productData.effects}</p>
							</div>
						)}

						{productData?.limits && (
							<div className='limits'>
								<h3 className='row'>
									Ograničenja <FaSkullCrossbones />
								</h3>
								<p>{productData.limits}</p>
							</div>
						)}
					</div>
				</div>
			</div>
		</main>
	)
}
