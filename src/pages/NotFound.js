import React from 'react'
import { Link } from 'react-router-dom'

export const NotFound = () => {
	return (
		<div className='flex-center'>
			<h2>Stranica nije pronađena</h2>
			<p>Stranica je u izradi. Molim Vas, pričekajte još malo...</p>
			<Link to='/'>nazad na početnu</Link>
		</div>
	)
}
