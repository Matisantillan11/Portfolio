import React from 'react'

import Particles from "react-tsparticles";
import { ConfigParticles } from '../ConfigParticles'

export const BackgroundParticles = ({ children }) => {
	return (
		<>
			<Particles id='tsparticles' options={ConfigParticles}>
				{children}
			</Particles>
		</>
	)
}
