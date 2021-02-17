import React from 'react'
import {Link} from 'react-router-dom'
import { Component } from 'react';

//Components
import Technologies from './Technologies'
//Styles
import '../assets/styles/components/ProjectCard.css'
//Importing Components
import GitHub from '../assets/images/icons/github.svg';


export default class ProjectCard extends Component{

    render(){
        return(
            
            <>
                {this.props.projects.map(project =>{
                    return(
                    
                        <div 
                        className="project_card"
                        key={project.id}>
                            <img className="project_card--img"src={project.image} alt={project.title} />
                            <div className="project_card_titleContainer">
                                <h2 className="project_card--title">{project.title} Project</h2> 
                                <p className="project_card--description">{project.description}</p>
                                <Technologies className="project_card--tech" technologies={this.props.technologies} />
                            </div>
                            <div className="project_card--container">
                                    <div className="links-container">
                                        <a className = "link" target="_blank" href={project.code}>
                                            View Code
                                        </a>
                                        <a className = "link" target="_blank" href={project.preview}>
                                            Live Preview
                                        </a>
                                    </div>
                            </div> 
                        </div>
                    
                        
                        
                    )
                })}
            </>
            
        )
    }
}