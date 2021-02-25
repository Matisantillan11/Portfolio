import React from 'react'
import { Component } from 'react';

//Components
import Technologies from './Technologies'
//Styles
import '../assets/styles/components/ProjectCard.css'



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
                            <div className="project_card_textContainer">
                                <div className="project_card_titleContainer">
                                    <h2 className="project_card--title">{project.title} Project</h2> 
                                    <p className="project_card--description">{project.description}</p>
                                </div>
                                <div className="techs_Container">
                                    {project.react ? <Technologies className="project_card--tech" technologies={this.props.technologies.slice(0,4)} /> : <Technologies className="project_card--tech" technologies={this.props.technologies.slice(0,3)} />}
                                </div>
                                
                            </div>
                            <div className="project_card--container">
                                    <div className="links-container">
                                        <a className = "link" rel="noopener noreferrer" target="_blank" href={project.code}>
                                            View Code
                                        </a>
                                        <a className = "link" rel="noopener noreferrer" target="_blank" href={project.preview}>
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