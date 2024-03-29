import React from 'react'
import { useHistory, withRouter } from 'react-router-dom'
import 'firebase/firebase-storage'

//Styles
import '../assets/styles/components/ProjectCard.css'
import { LinkExternal } from './LinkExternal'
import { IoExitOutline } from 'react-icons/io5'
import { IoLogoGithub } from 'react-icons/io5'
import { IoContract } from 'react-icons/io5'

export const ProjectCard = ({ name, pic, code, review }) => {
	const history = useHistory()

	const searchProject = () => {
		history.push(`/Description?${name}`)
	}

	return (
		<>
			<div className='project_card'>
				<img
					className='project_card--img'
					src={pic}
					alt={name}
					loading='lazy'
				/>
				<div className='project_card--container'>
					<div className='links-container'>
						<LinkExternal link={code} textBtn='Ver Código'>
							<IoExitOutline />
							<IoLogoGithub />
						</LinkExternal>

						<LinkExternal link={review} textBtn='Visitar'>
							<IoExitOutline rotate={'45deg'} />
							<IoContract />
						</LinkExternal>

						<p className='link' onClick={searchProject}>
							<span className='link-decoration'>Ver más...</span>
						</p>
					</div>
				</div>
			</div>
		</>
	)
}
