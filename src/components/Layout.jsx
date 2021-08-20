import React from 'react'

import { Navbar } from './Navbar.jsx'
import { MediaContainer } from '../components/MediaContainer'

export default function Layout({ children }) {
	return (
		<>
			<Navbar />
			{children}
			<MediaContainer />
		</>
	)
}
