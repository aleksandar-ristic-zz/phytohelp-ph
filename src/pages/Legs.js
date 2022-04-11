import { Link } from 'react-router-dom'
import ReturnBtn from '../components/ReturnBtn'

export const Legs = () => {
	return (
		<main className='legs container'>
			<ReturnBtn />
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

				<Link className='tooltip thigh' title='Butina' to='/noge/butine'></Link>
				<Link className='tooltip knee' title='Koleno' to='/n'></Link>
				<Link className='tooltip feet' title='Stopalo' to='/noge/zglob'></Link>
			</div>
		</main>
	)
}
