import React from 'react'
import { Link } from 'react-router-dom'

export const Blogs = () => {
	return (
		<div>
			<h2>Blogs</h2>
			<p>Napišite blogove stavićemo ovde.</p>
			<Link to='/'>nazad na početnu</Link>
		</div>
	)
}
