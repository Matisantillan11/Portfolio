import React from 'react'

import '../assets/styles/components/MediaContainer.css'
import { ContactMedia } from './ContactMedia'
import { IoLinkSharp } from 'react-icons/io5'
import { IoMailSharp } from 'react-icons/io5'
import { IoLogoVercel } from 'react-icons/io5'
import { IoLogoLinkedin } from 'react-icons/io5'
import { IoLogoGithub } from 'react-icons/io5'
export const MediaContainer = () => {
	return (
		<>
			<div className='media__contact-container'>
				<ContactMedia
					color='black'
					externalLink='https://github.com/Matisantillan11'
				>
					<IoLogoGithub />
				</ContactMedia>
				<ContactMedia
					color='white'
					externalLink='https://vercel.com/matisantillan11'
				>
					<IoLogoVercel color={'black'} />
				</ContactMedia>
				<ContactMedia
					color='#0a66c2'
					externalLink='https://www.linkedin.com/in/matisantillan11/'
				>
					<IoLogoLinkedin />
				</ContactMedia>

				<ContactMedia
					color='#CD3C30'
					externalLink='mailto:matias1.santillan@gmail.com'
				>
					<IoMailSharp />
				</ContactMedia>
			</div>
		</>
	)
}
