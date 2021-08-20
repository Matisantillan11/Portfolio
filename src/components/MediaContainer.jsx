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
				<ContactMedia color='black'>
					<IoLogoGithub />
				</ContactMedia>
				<ContactMedia color='white'>
					<IoLogoVercel color={'black'} />
				</ContactMedia>
				<ContactMedia color='#0a66c2'>
					<IoLogoLinkedin />
				</ContactMedia>

				<ContactMedia color='#CD3C30'>
					<IoMailSharp />
				</ContactMedia>

				<ContactMedia color='#1e1e62'>
					<IoLinkSharp />
				</ContactMedia>
			</div>
		</>
	)
}
