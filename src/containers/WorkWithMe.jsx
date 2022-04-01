import React from 'react'

import { Link } from 'react-router-dom'
import { BackgroundParticles } from '../components/BackgroundParticles'
import { MediaContainer } from '../components/MediaContainer'

import { IoLogoReact } from 'react-icons/io5'
import { IoLogoNodejs } from 'react-icons/io5'

import '../assets/styles/containers/WorkWithMe.css'
import '../assets/styles/containers/HomePage.css'

export const WorkWithMe = () => {
	return (
		<div className='home_page'>
			<BackgroundParticles />
			<div className='form_container'>
				<div className='hero__text-container' style={{ height: '20%' }}>
					<h3 className='slogan'>
						Hey, <p>Muchas gracias</p>
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
					/>
					<textarea
						className='form_comment--input'
						type='text'
						placeholder='Escribe tu comentario...'
					/>

					<button className='send_form' to='/Projects'>
						Enviar
					</button>
				</form>
			</div>

			<MediaContainer />
		</div>
	)
}
