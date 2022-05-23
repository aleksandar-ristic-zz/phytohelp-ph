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

				<Link
					tabIndex='1'
					className='tooltip upper'
					title='Čelo'
					to='/glava/čelo'
				></Link>
				<div tabIndex='1' className='links flex-center sinus'>
					<Link className='tooltip' title='Oči' to='/glava/oči'>
						Oči
					</Link>
					<Link className='tooltip' title='Sinusi' to='/glava/sinusi'>
						Sinusi
					</Link>
				</div>

				<div className='links flex-center teeth'>
					<Link tabIndex='1' className='tooltip ' title='Zubi' to='/glava/zubi'>
						Zubi
					</Link>

					<Link tabIndex='1' className='tooltip' title='Grlo' to='/glava/grlo'>
						Grlo
					</Link>
				</div>
			</div>
		</main>
	)
}
