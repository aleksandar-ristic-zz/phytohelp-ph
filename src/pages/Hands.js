import { Link } from 'react-router-dom'
import ReturnBtn from '../components/ReturnBtn'

export const Hands = () => {
	return (
		<main className='hands container'>
			<ReturnBtn />
			<div className='headline flex-center'>
				<h2>Oblast Ruke</h2>
				<p>Kliknite na sliku za pretragu anatomske kategorije.</p>
			</div>
			<div
				className='img-container grid-container'
				style={{ backgroundImage: 'url(/img/ruka/hand.png)' }}
			>
				<Link className='tooltip' title='Ručni Zglob' to='/ruka/zglob'></Link>
			</div>
		</main>
	)
}
