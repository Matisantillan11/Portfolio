import React, { useState } from 'react'
import { NavbarItems } from './NavbarItems'

import '../assets/styles/components/Hamburguer.css'

export const Hamburguer = () => {
	const [status, setStatus] = useState('close')

	const expandMenu = (ev) => {
		const menu = document.getElementById('menu')
		const links = document.querySelectorAll(
			'.navbar__items-menu .navbar__items--link',
		)
		setStatus(status === 'open' ? 'close' : 'open')
		menu.classList.toggle('expand')
		links.forEach((link) => {
			link.classList.toggle('fade')
		})
	}

	return (
		<>
			<div onClick={expandMenu} className='burger'>
				<i className={status}></i>
				<i className={status}></i>
				<i className={status}></i>
			</div>

			<NavbarItems onClick={expandMenu} status={status} />
		</>
	)
}
