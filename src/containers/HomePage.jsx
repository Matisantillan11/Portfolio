import React from 'react'

import { Link } from 'react-router-dom'
import { LinkExternal } from '../components/LinkExternal'
import { BackgroundParticles } from '../assets/styles/components/BackgroundParticles'
import { MediaContainer } from '../components/MediaContainer'
import { IoLogoReact } from 'react-icons/io5'
import { IoLogoNodejs } from 'react-icons/io5'

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
							React JS <IoLogoReact />
						</a>
						,
						<a
							href='https://reactnative.dev/'
							rel='noopener noreferrer'
							target='_blank'
							className='react-native'
						>
							React Native <IoLogoReact />
						</a>
						&
						<br />
						<a
							href='https://nodejs.org/es/'
							rel='noopener noreferrer'
							target='_blank'
							className='node'
						>
							Node js <IoLogoNodejs />
						</a>
						.
					</p>

					<p>Sientete libre de ver mi trabajo en mi portfolio web</p>

					<p>
						Puedes contactarte conmigo por
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
						Tambien puedes encontrarme en
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
				<Link className='hero_toaction' to='/Projects'>
					Ver mis proyectos
				</Link>
			</div>
			<MediaContainer />
		</div>
	)
}
