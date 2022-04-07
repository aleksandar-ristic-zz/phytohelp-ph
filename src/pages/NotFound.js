import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound = () => {
	return (
		<div className='flex-center'>
			<h2>Stranica nije pronađena.</h2>
			<p>
				Ako niste našli ostavite <Link to='/'>sugestiju</Link>.
			</p>
			<p>
				Ili se vratite <Link to='/'>na početnu</Link>.
			</p>
		</div>
	)
}
