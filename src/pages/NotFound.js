import { Link, useNavigate } from 'react-router-dom'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'

export const NotFound = () => {
	const navigate = useNavigate()
	return (
		<main className='container'>
			<div className='links__controls row'>
				<div className='return flex-center' onClick={() => navigate(-1)}>
					<HiOutlineArrowNarrowLeft />
				</div>
				<h2>Nazad</h2>
			</div>
			<div className='headline flex-center'>
				<h2>Stranica nije pronađena.</h2>
				<p>
					Ostavite <Link to='/contact'>sugestiju</Link>.
				</p>
				<p>
					Vratite se <Link to='/'>na početnu</Link>.
				</p>
			</div>
			<div className='flex-center'>
				<img src='/img/404.png' alt='not found 404' />
			</div>
		</main>
	)
}
