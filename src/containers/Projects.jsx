import React, { useState, useEffect } from 'react'

import { ProjectCard } from '../components/projectCard'
import firebase from 'firebase/app'
import RingLoader from 'react-spinners/RingLoader'

import 'firebase/firestore'
import '../assets/styles/containers/Projects.css'

export const Projects = () => {
	const [projects, setProjects] = useState([])
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		setIsLoading(true)
		const db = firebase.firestore()
		const productRef = db.collection('projects')

		productRef.onSnapshot((snapshot) => {
			if (snapshot.empty) {
				return <h1>No hay productos</h1>
			} else {
				let projects = []
				snapshot.forEach((project) => {
					projects = [...projects, { data: project.data() }]
				})

				setProjects(projects)
				setIsLoading(false)
			}
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
				<>
					<h1 className='project-page-title'>Mis proyectos</h1>
					<div className='projects_container'>
						{projects &&
							projects.map((project, i) => (
								<ProjectCard
									key={i}
									name={project.data.name}
									pic={project.data.pic}
									description={project.data.description}
									react={project.data.react}
									code={project.data.code}
									review={project.data.review}
								/>
							))}
					</div>
				</>
			)}
		</>
	)
}
