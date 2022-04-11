import { Link } from 'react-router-dom'
import ReturnBtn from '../components/ReturnBtn'

export const Torso = () => {
	return (
		<main className='torso container'>
			<ReturnBtn />
			<div className='headline flex-center'>
				<h2>Oblasti Torza</h2>
				<p>Kliknite na sliku za pretragu anatomske kategorije.</p>
			</div>
			<div
				className='img-container grid-container'
				style={{ backgroundImage: 'url(/img/torzo/torso.png)' }}
			>
				<div className='el'></div>
				<div className='eu'></div>
				<div className='er'></div>
				<Link
					tabindex='1'
					className='stitna links flex-center tooltip'
					title='Štitna Žlezda'
					to='štitna'
				></Link>
				<Link
					tabindex='1'
					className='pluca links tooltip'
					title='Pluća'
					to='pluća'
				></Link>
				<div tabindex='1' className='vz links flex-center'>
					<Link to='varenje'>Sistem za Varenje</Link>
					<Link to='želudac'>Želudac</Link>
				</div>
				<Link
					tabindex='1'
					className='creva links tooltip'
					title='Crevni Sistem'
					to='crevni'
				></Link>
				<div tabindex='1' className='udm links flex-center'>
					<Link to='urinarni'>Urinarni Trakt</Link>
					<Link to='dijareja'>Dijareja</Link>
					<Link to='menopauza'>Menopauza</Link>
				</div>
			</div>
		</main>
	)
}
