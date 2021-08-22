import React from 'react'

import { Link } from 'react-router-dom'
import { BackgroundParticles } from '../assets/styles/components/BackgroundParticles'

import '../assets/styles/containers/HomePage.css'

export const HomePage = () => {
	return (
		<div className='home_page'>
			<BackgroundParticles />
			<div id='hero'>
				<div className='hero__text-container'>
					<h3 className='slogan'>
						Hey, soy <p>Matias Santillán</p>
					</h3>
					<p>
						Full-stack web developer, enfocado y dedicado al Stack de JavaScript
						utilizando frameworks como
						<a
							href='https://es.reactjs.org/'
							rel='noopener noreferrer'
							target='_blank'
							className='react'
						>
							React JS
						</a>
						,
						<a
							href='https://reactnative.dev/'
							rel='noopener noreferrer'
							target='_blank'
							className='react-native'
						>
							React Native
						</a>
						&
						<a
							href='https://nodejs.org/es/'
							rel='noopener noreferrer'
							target='_blank'
							className='node'
						>
							Node js
						</a>
						.
					</p>

					<p>Sientete libre de ver mi trabajo en mi portfolio web</p>

					<p>
						Puedes contactarte conmigo por
						<a
							href='https://nodejs.org/es/'
							rel='noopener noreferrer'
							target='_blank'
							className='red-social'
						>
							Linkedin
						</a>
						o
						<a
							href='https://nodejs.org/es/'
							rel='noopener noreferrer'
							target='_blank'
							className='red-social'
						>
							Email.
						</a>
						Tambien puedes encontrarme en
						<a
							href='https://nodejs.org/es/'
							rel='noopener noreferrer'
							target='_blank'
							className='red-social'
						>
							GitHub
						</a>
					</p>
				</div>
				<Link className='hero_toaction' to='/Projects'>
					Ver mis proyectos
				</Link>
			</div>
		</div>
	)
}
