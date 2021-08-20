import React from 'react'
import { Link } from 'react-router-dom'

export const ListItem = ({ onClick, linkItem, textItem, children }) => {
	return (
		<li className='navbar__items--link' onClick={onClick}>
			<Link className='navbar_redirections' to={linkItem}>
				{textItem}
			</Link>

			{children}
		</li>
	)
}
