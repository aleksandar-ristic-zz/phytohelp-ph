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
						<Link to='/n'>Preparati</Link>
					</li>
					<li>
						<Link to='/about'>O nama</Link>
					</li>
					<li>
						<Link to='/contact'>Kontakt</Link>
					</li>
				</ul>
			</div>
		</header>
	)
}

export default Header
