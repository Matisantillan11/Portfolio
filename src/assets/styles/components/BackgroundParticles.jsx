import React from 'react'

import Particles from 'react-particles-js'
import { ConfigParticles } from './ConfigParticles'

export const BackgroundParticles = ({ children }) => {
	return (
		<>
			<div
				style={{
					maxHeight: '80vh',
					zIndex: -1,
				}}
			>
				<Particles params={ConfigParticles}>{children}</Particles>
			</div>
		</>
	)
}
