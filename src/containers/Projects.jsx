import React, {Component, useState} from 'react' 

import Navbar from '../components/Navbar'
import ProjectCard from '../components/projectCard'

import GodHard from '../assets/images/godhard.png'
import FindRock from '../assets/images/find-rock.png'


import '../assets/styles/containers/Projects.css'

export default class Projects extends Component{
    state = {
        title: '',
        description: '',
        image: '' 

    }; 

    

    render(){
        return(
            <>
            <Navbar/>
            <h1 className="project-page-title">My Projects</h1>
            <div className="projects_container">
                <ProjectCard 
                title="GodHard"
                image={GodHard}
                description="Come queso" />
                <ProjectCard 
                title="Find Rock"
                image={FindRock}
                description="Come queso" />
                <ProjectCard
                title="Dietetica Kaori"
                image={FindRock}
                description="Come queso"/>
                
            </div>
            </>
        )
    }
}
