import React from 'react'
import { IoExitOutline } from 'react-icons/io5'

import '../assets/styles/components/LinkExternal.css'

export const LinkExternal = ({ textBtn, link, sourceImage, altImg }) => {
	return (
		<>
			<a className='link' rel='noopener noreferrer' target='_blank' href={link}>
				<span className='link-decoration'> {textBtn} </span>
				<span className='icon-change'>
					<IoExitOutline />

					<img src={sourceImage} alt={altImg} />
				</span>
			</a>
		</>
	)
}
