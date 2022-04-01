import React from 'react'

export const DownloadItem = ({ onClick, linkItem, textItem, children }) => {
	return (
		<a
			className='navbar_redirections'
			href={linkItem}
			download
			onClick={onClick}
		>
			{textItem}
			{children}
		</a>
	)
}
