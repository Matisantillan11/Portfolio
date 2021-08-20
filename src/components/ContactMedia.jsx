import React from 'react'

import '../assets/styles/components/ContactMedia.css'
export const ContactMedia = ({ children, color }) => {
	return (
		<div
			className='contact_media--container'
			style={{ 'background-color': color }}
		>
			{children}
		</div>
	)
}
