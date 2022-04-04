import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'

const Header = () => {
	const [isOpen, setIsOpen] = useState(false)

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
						<button
							onClick={() => setIsOpen(prev => !prev)}
							className='flex-center'
						>
							<FaSearch className='search-icon' />
						</button>
					</li>
				</ul>
			</div>

			<div className={`row search-container`}>
				<form className={isOpen ? 'show' : ''}>
					<label className='offscreen' htmlFor='search'>
						Pretražite delove tela ili preparate
					</label>
					<input
						type='search'
						name='search'
						id='search'
						placeholder='Pretražite delove tela'
						autoComplete='off'
					/>
					<button className='search-icon'>
						<FaSearch />
					</button>
				</form>
			</div>
		</header>
	)
}

export default Header
