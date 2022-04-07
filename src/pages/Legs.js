import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'

export const Legs = () => {
	const navigate = useNavigate()
	return (
		<main className='legs container'>
			<div className='links__controls row'>
				<div className='return flex-center' onClick={() => navigate(-1)}>
					<HiOutlineArrowNarrowLeft />
				</div>
				<h2>Telo</h2>
			</div>
			<div className='headline flex-center'>
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
		</main>
	)
}
