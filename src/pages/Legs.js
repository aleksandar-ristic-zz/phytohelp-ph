import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'

export const Legs = () => {
	const navigate = useNavigate()
	return (
		<main className='legs container'>
			<div className='flex-center'>
				<h2>Oblasti Noge</h2>
				<p>Kliknite na sliku za pretragu anatomske kategorije.</p>
			</div>

			<div
				className='img-container grid-container'
				style={{ backgroundImage: 'url(/img/noge/legs.png)' }}
			>
				<div className='empty-l'></div>
				<div className='empty-r'></div>

				<Link className='tooltip thigh' title='Butina' to='/n'></Link>
				<Link className='tooltip knee' title='Koleno' to='/n'></Link>
				<Link className='tooltip feet' title='Stopalo' to='/noge/zglob'></Link>
			</div>
			<div className='flex-center'>
				<div className='return'>
					<HiOutlineArrowNarrowLeft onClick={() => navigate(-1)} />
					nazad
				</div>
			</div>
		</main>
	)
}
