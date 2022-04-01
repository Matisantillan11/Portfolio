import React from 'react'
import { Link } from 'react-router-dom'

import '../assets/styles/components/ContactMedia.css'
export const ContactMedia = ({
	children,
	color,
	externalLink,
	internal = false,
}) => {
	return (
		<div
			className='contact_media--container'
			style={{ backgroundColor: color }}
		>
			{internal ? (
				<Link to={externalLink}>{children}</Link>
			) : (
				<a rel='noopener noreferrer' target='_blank' href={externalLink}>
					{children}
				</a>
			)}
		</div>
	)
}
