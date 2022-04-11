import { Link } from 'react-router-dom'
import ReturnBtn from '../components/ReturnBtn'

export const Head = () => {
	return (
		<main className='head container'>
			<ReturnBtn />
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
