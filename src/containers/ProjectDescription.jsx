import React, { useState, useEffect } from 'react'
import firebase from 'firebase/app'
import { useHistory } from 'react-router-dom'
import RingLoader from 'react-spinners/RingLoader'

import 'firebase/firestore'
import '../assets/styles/containers/ProjectDescription.css'

export const ProjectDescription = () => {
	const [projectDescription, setProjectDescription] = useState({})
	const [isLoading, setIsLoading] = useState(true)

	const history = useHistory()

	useEffect(() => {
		setIsLoading(true)
		const db = firebase.firestore()
		const dbref = db.collection('projects')

		let projectName = history.location.search.substr(1).replace('%20', '-')

		dbref
			.where('name', '==', `${projectName}`)
			.get()
			.then((doc) => {
				if (!doc.empty) {
					let projectDescription = {}
					doc.forEach((project) => {
						if (project.exists) {
							projectDescription = project.data()
						}
					})

					setProjectDescription(projectDescription)
					setIsLoading(false)
				} else {
					console.log('not added')
				}
			})
			.catch((error) => {
				console.log(error.message)
				setIsLoading(false)
			})
	}, [])

	return (
		<>
			{isLoading ? (
				<div
					style={{
						height: '100vh',
						width: '100vw',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					}}
				>
					<RingLoader color={'#f1f1f1'} loading={isLoading} size={60} />
				</div>
			) : (
				projectDescription && (
					<div className='projectDescription_container'>
						<h1 className='title-description'>
							PROYECTO {projectDescription.name}
						</h1>
						<div className='topbar'>
							<p>{projectDescription.subtitle}</p>

							<a href={projectDescription.code} target='_blank'>
								Código
							</a>
							<a href={projectDescription.review} target='_blank'>
								Visitar
							</a>
						</div>
						<div className='images-container'>
							<img
								src={projectDescription.pic}
								alt={projectDescription.name}
								loading='lazy'
							/>
						</div>
						<div className='description_container'>
							<h2>Sobre el proyecto</h2>
							<p>{projectDescription.description}</p>
							<p>{projectDescription.subdescription}</p>
							<p>{projectDescription.p1}</p>
							<p>{projectDescription.p2}</p>
						</div>
						<div className='techs_container'>
							<h2>Tecnologías utilizadas</h2>
							<ul>
								{projectDescription.technologies &&
									projectDescription.technologies.map((tech, i) => (
										<li key={i} className='MyStack-list-item'>
											{tech}
										</li>
									))}
							</ul>
						</div>
					</div>
				)
			)}
		</>
	)
}
