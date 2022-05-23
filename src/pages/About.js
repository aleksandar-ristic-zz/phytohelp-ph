import React from 'react'
import { Link } from 'react-router-dom'
import ReturnBtn from '../components/ReturnBtn'

export const About = () => {
	return (
		<main className='container'>
			<ReturnBtn parent={'Početna'} />
			<div className='headline flex-center'>
				<h2>O nama</h2>
				<p>Naš stručni tim.</p>
			</div>

			<div className='about flex-center'>
				<img src='/img/group.jpeg' alt='strucni tim' title='strucni tim' />
				<img src='/img/group2.jpeg' alt='stručni tim' title='stručni tim' />
			</div>

			<div className='about-headline headline flex-center'>
				<div>
					<p>Ponedeljak, 11.04.2022.</p>
					<h3>Medicinska škola “Draginja Nikšić”, Sremska Mitrovica</h3>
					<h3>Farmaceutski tehničari II godina</h3>
					<Link className='about-back' to='/'>
						Nazad na početnu stranicu
					</Link>
				</div>
			</div>
		</main>
	)
}
