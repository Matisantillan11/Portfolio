import React from 'react'

export const ExternalListItem = ({ children, externalLink, textItem }) => {
	return (
		<li className='navbar__items--link'>
			<a
				className='navbar_redirections'
				rel='noopener noreferrer'
				target='_blank'
				href={externalLink}
			>
				{textItem}
			</a>

			{children}
		</li>
	)
}
