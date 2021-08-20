import React from 'react'

import '../assets/styles/components/LinkExternal.css'

export const LinkExternal = ({
	textBtn,
	link,
	sourceImage,
	altImg,
	children,
}) => {
	return (
		<>
			<a className='link' rel='noopener noreferrer' target='_blank' href={link}>
				<span className='link-decoration'> {textBtn} </span>
				<span className='icon-change'>
					{children}

					<img src={sourceImage} alt={altImg} />
				</span>
			</a>
		</>
	)
}
