import { useState, useEffect } from 'react'
import ReturnBtn from '../components/ReturnBtn'
import SubmitMessage from '../components/SubmitMessage'
import emailjs from '@emailjs/browser'

const USER_ID = process.env.REACT_APP_EMAILJS_USER_ID
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY

export const Contact = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [subject, setSubject] = useState('')
	const [message, setMessage] = useState('')
	const [submitText, setSubmitText] = useState({})

	const handleSubmit = async e => {
		e.preventDefault()

		const params = { name, email, subject, message }

		try {
			setSubmitText({ type: 'success', text: 'Šalje se...' })
			const response = await emailjs.send(
				USER_ID,
				TEMPLATE_ID,
				params,
				PUBLIC_KEY
			)

			if (response.text) {
				setSubmitText({ type: 'success', text: 'Poruka poslata!' })
			}
		} catch (error) {
			console.error(error)
			setSubmitText({ type: 'fail', text: 'Greška! Pokušajte ponovo kasnije.' })
		}
		setName('')
		setEmail('')
		setSubject('')
		setMessage('')
	}

	useEffect(() => {
		if (!submitText) return

		const timeout = setTimeout(() => {
			setSubmitText('')
		}, 5000)

		return () => clearTimeout(timeout)
	}, [submitText])

	return (
		<main className='contact container'>
			<ReturnBtn parent={'Početna'} />
			<div className='headline flex-center'>
				<h2>Kontakt forma</h2>
				<p>Pošaljite nam vaša pitanja, primedbe ili sugestije</p>
			</div>

			<SubmitMessage message={submitText} />
			<form className='form' onSubmit={handleSubmit}>
				<div className='form__group'>
					<label htmlFor='name'>Ime i prezime</label>
					<input
						type='text'
						className='form__control'
						id='name'
						placeholder='Unesite Vaše ime i prezime'
						value={name}
						onChange={e => setName(e.target.value)}
					/>
				</div>
				<div className='form__group'>
					<label htmlFor='email'>Email adresa</label>
					<input
						type='email'
						className='form__control'
						id='email'
						placeholder='Unesite Vašu email adresu'
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
				</div>
				<div className='form__group'>
					<label htmlFor='subject'>Naslov</label>
					<input
						type='text'
						className='form__control'
						id='subject'
						placeholder='Unesite naslov poruke'
						value={subject}
						onChange={e => setSubject(e.target.value)}
					/>
				</div>
				<div className='form__group'>
					<label htmlFor='message'>Poruka</label>
					<textarea
						className='form__control'
						id='message'
						placeholder='Unesite tekst Vaše poruke'
						value={message}
						onChange={e => setMessage(e.target.value)}
					></textarea>
				</div>
				<button
					disabled={!name || !email || !subject || !message}
					type='submit'
					className='btn btn-primary'
				>
					Pošalji
				</button>
			</form>
		</main>
	)
}
