import React from 'react'

import '../assets/styles/components/NavbarItems.css'
import { ExternalListItem } from './ExternalListItem'
import { ListItem } from './ListItem'
import { IoHomeSharp } from 'react-icons/io5'
import { IoCodeSharp } from 'react-icons/io5'
import { IoMailSharp } from 'react-icons/io5'
import { IoLogoLinkedin } from 'react-icons/io5'
import { IoLogoGithub } from 'react-icons/io5'

export const NavbarItems = ({ status, onClick }) => {
	return (
		<ul className='navbar__items-menu' id='menu' status={status}>
			<div className='items-container'>
				<ListItem textItem='Inicio' linkItem='/' onClick={onClick}>
					<IoHomeSharp />
				</ListItem>

				<ListItem textItem='Portfolio' linkItem='/Projects' onClick={onClick}>
					<IoCodeSharp />
				</ListItem>

				<ListItem textItem='Contactame' linkItem='/Work' onClick={onClick}>
					<IoMailSharp />
				</ListItem>
			</div>
		</ul>
	)
}
