import React from 'react'

import Particles from 'react-particles-js'
import { ConfigParticles } from '../ConfigParticles'

export const BackgroundParticles = ({ children }) => {
	return (
		<>
			<Particles id='particles' params={ConfigParticles}>
				{children}
			</Particles>
		</>
	)
}
