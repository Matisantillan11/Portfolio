import React from 'react'

import '../assets/styles/components/NavbarItems.css'
import { DownloadItem } from './DownloadItem'
import { ListItem } from './ListItem'
import { IoHomeSharp } from 'react-icons/io5'
import { IoCodeSharp } from 'react-icons/io5'
import { IoMailSharp } from 'react-icons/io5'
import { IoDownloadSharp } from 'react-icons/io5'
import CV from '../assets/images/SantillanMatiasCV.pdf'

export const NavbarItems = ({ status, onClick }) => {
	return (
		<ul className='navbar__items-menu' id='menu' status={status}>
			<div className='items-container'>
				<ListItem textItem='Inicio' linkItem='/' onClick={onClick}>
					<IoHomeSharp />
				</ListItem>

				<ListItem textItem='Portfolio' linkItem={'/Projects'} onClick={onClick}>
					<IoCodeSharp />
				</ListItem>

				<DownloadItem
					textItem='Descargar CV'
					linkItem={'../assets/images/SantillanMatiasCV.pdf'}
					onClick={onClick}
				>
					<IoDownloadSharp />
				</DownloadItem>

				<ListItem textItem='Contactame' linkItem='/Work' onClick={onClick}>
					<IoMailSharp />
				</ListItem>
			</div>
		</ul>
	)
}
