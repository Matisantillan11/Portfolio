import React, { useState } from 'react'

import { BackgroundParticles } from '../components/BackgroundParticles'
import { MediaContainer } from '../components/MediaContainer'

import firebase from 'firebase/app'
import 'firebase/firestore'
import '../assets/styles/containers/Projects.css'

import '../assets/styles/containers/WorkWithMe.css'
import Swal from 'sweetalert2'

export const WorkWithMe = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [comment, setComment] = useState('')
	const [loading, setLoading] = useState(false)

	const sendForm = (e) => {
		e.preventDefault()

		const db = firebase.firestore()
		if (name !== '' && comment !== '' && email !== '') {
			setLoading(true)
			db.collection('contacts')
				.doc()
				.set({
					name,
					email,
					body: comment,
				})
				.then(() => {
					Swal.fire({
						icon: 'success',
						title: 'Tu mensaje fue enviado con éxito!',
						text: 'Me comunicaré con vos a la brevedad.',
					})
					setLoading(false)
				})
				.catch(() => {
					Swal.fire({
						icon: 'error',
						title: 'Oops...',
						text: 'No pudimos enviar tu mensaje!',
					})
					setLoading(false)
				})
		} else {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Debes llenar todos los campos para enviar tu mensaje!',
			})
		}
	}

	return (
		<div className='home_page'>
			<BackgroundParticles />
			<div className='form_container'>
				<div className='hero__text-container' style={{ height: '20%' }}>
					<h3 className='slogan'>
						Hey, <p>Muchas gracias!</p>
					</h3>

					<p>
						Me alegro que te haya gustado mi trabajo. No dudes en dejarme tu
						comentario o medio de contacto para mantenernos en contacto. Recordá
						que también puedes contactarte conmigo por
						<a
							href='https://www.linkedin.com/in/matisantillan11/'
							rel='noopener noreferrer'
							target='_blank'
							className='red-social'
						>
							Linkedin
						</a>
						o
						<a
							href='mailto:matias1.santillan@gmail.com'
							rel='noopener noreferrer'
							target='_blank'
							className='red-social'
						>
							Email.
						</a>
						También puedes encontrarme en
						<a
							href='https://github.com/Matisantillan11'
							rel='noopener noreferrer'
							target='_blank'
							className='red-social'
						>
							GitHub
						</a>
					</p>
				</div>

				<form className='form'>
					<input
						className='form_name--input'
						type='text'
						placeholder='Ingresa tu nombre'
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>

					<input
						className='form_name--input'
						type='email'
						placeholder='Ingresa tu email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
					<textarea
						className='form_comment--input'
						type='text'
						placeholder='Escribe tu comentario...'
						value={comment}
						onChange={(e) => setComment(e.target.value)}
					/>

					<button className='send_form' onClick={sendForm}>
						{loading ? 'Enviando,,,' : 'Enviar'}
					</button>
				</form>
			</div>

			<MediaContainer />
		</div>
	)
}
