import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<header className='container'>
			<div className='row main-header'>
				<Link to='/' className='logo-container'>
					<img src='/img/logo.png' alt='phytohelp logo' />
					<p>PhytoHelp</p>
				</Link>
				<ul className='row'>
					<li>
						<Link to='/'>Preparati</Link>
					</li>
					<li>
						<Link to='/'>Objave</Link>
					</li>
					<li>
						<Link to='/'>Kontakt</Link>
					</li>
				</ul>
			</div>
		</header>
	)
}

export default Header
