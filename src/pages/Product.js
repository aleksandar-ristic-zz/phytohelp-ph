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
			<div className='row name'>
				<h2>{data[body].parts[bodyPart].name}</h2>
				<div className='return'>
					<HiOutlineArrowNarrowLeft onClick={() => navigate(-1)} />
				</div>
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
								<p>
									Deluje aktivno i pouzdano protiv uzroka i simptoma akutnog,
									subakutnog i hroničnog zapaljenja paranazalnih sinusa i
									rinitisa.Dolazi do prestajanja bola I pritiska u
									glavi,omogućava normalno disanje,podstiče I olakšava
									pražnjenje sekreta I otklanja zapaljenje I otok.
								</p>
							</div>
						)}

						{productData?.effects && (
							<div className='effects'>
								<h3 className='row'>
									Dejstvo
									<FaSyringe />
								</h3>
								<p>
									'Preparat ima protivupalno, antibakterijsko, protivgljivično,
									antivirusno, analgetsko i ekpektoransno dejstvo. Blagotvorno
									deluje na sluzokožu sinusa, otklanja zapaljenje i otok, otvara
									prolaze izmedju sinusnih supljina i tako otklanja blokadu
									otvora sinusa; podstiče pravilan rad cilija koji uklanjaju
									polutante i neželjeni sadržaj iz obolelih sinusa i nosa,
									podstče i olakšava pražnjenje sekreta iz sinusa i nosa.'
								</p>
							</div>
						)}

						{productData?.limits && (
							<div className='limits'>
								<h3 className='row'>
									Ograničenja <FaSkullCrossbones />
								</h3>
								<p>Ne smeju odrasli i deca preko 6 godina.</p>
							</div>
						)}
					</div>
				</div>
			</div>
		</main>
	)
}
