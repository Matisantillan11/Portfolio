import React from 'react'

import '../assets/styles/components/ContactMedia.css'
export const ContactMedia = ({ children, color, externalLink }) => {
	return (
		<div
			className='contact_media--container'
			style={{ backgroundColor: color }}
		>
			<a rel='noopener noreferrer' target='_blank' href={externalLink}>
				{children}
			</a>
		</div>
	)
}
