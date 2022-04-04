import { useState } from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
	const [isHidden, setIsHidden] = useState(false)
	return (
		<main className='home container'>
			<div className='flex-center'>
				<h2>Anatomska pretraga</h2>
				<p>Kliknite na sliku za pretragu anatomske kategorije.</p>
			</div>
			<div
				className='img-container grid-container'
				style={{ backgroundImage: 'url(/img/anatomy.png)' }}
			>
				<div
					className={`img-overlay ${isHidden ? 'hide' : ''}`}
					style={{ backgroundImage: 'url(/img/doctor.png)' }}
					onClick={() => setIsHidden(true)}
				></div>

				<div className='empty-l'></div>
				<div className='empty-r'></div>

				<div className='empty-hl'></div>
				<Link
					to='/glava'
					title='Glava'
					className='head tooltip'
					aria-label='Glava'
				></Link>
				<div className='empty-hr'></div>

				<Link
					to='/ruka'
					title='Leva Ruka'
					className='shoulder-l tooltip'
					aria-label='Leva Ruka'
				></Link>
				<Link
					to='/grudi'
					title='Grudi'
					className='chest tooltip'
					aria-label='Grudi'
				></Link>
				<Link
					to='/ruka'
					title='Desna Ruka'
					className='shoulder-r tooltip'
					aria-label='Desna Ruka'
				></Link>

				<Link
					to='/noge'
					title='Noge'
					className='legs tooltip'
					aria-label='Noge'
				></Link>
			</div>
		</main>
	)
}
