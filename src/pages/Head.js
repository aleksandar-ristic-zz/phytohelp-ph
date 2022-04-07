import { Link, useNavigate } from 'react-router-dom'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'

export const Head = () => {
	const navigate = useNavigate()
	return (
		<main className='head container'>
			<div className='links__controls row'>
				<div className='return flex-center'>
					<HiOutlineArrowNarrowLeft onClick={() => navigate(-1)} />
				</div>
				<h2>Telo</h2>
			</div>
			<div className='flex-center'>
				<h2>Oblasti Glave</h2>
				<p>Kliknite na sliku za pretragu anatomske kategorije.</p>
			</div>

			<div
				className='img-container grid-container'
				style={{ backgroundImage: 'url(/img/glava/head.png)' }}
			>
				<div className='empty-l'></div>
				<div className='empty-r'></div>

				<Link className='tooltip upper' title='čelo' to='/glava/čelo'></Link>
				<Link
					className='tooltip sinus'
					title='sinusi'
					to='/glava/sinusi'
				></Link>
				<Link className='tooltip teeth' title='zubi' to='/glava/zubi'></Link>
			</div>
		</main>
	)
}
