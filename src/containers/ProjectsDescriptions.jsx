import React, {Component} from 'react'

import '../assets/styles/containers/ProjectsDescriptions.css'

import Navbar from '../components/Navbar'
import ProjectCard from '../components/projectCard';


export default class ProjectDescriptions extends Component{
    
    state={
        title: '',
        image: '',
        description: ''
    };

    handleMouseOver = () =>{
        this.setState({
            /* image : this.image,
            title : this.title,
            description : this.description */
        }) 
    }

    render(){
        return(
            
            <div>
                <Navbar />
                <h1 className="project_name"> {this.state.title}</h1>
                <div className="project_image--container">
                    <img className="project_image--img"src={this.state.image} alt={this.state.title} />
                </div>
                <h2 className="project_categories">Description</h2>
                <div className="project_description--container">
                    <p>{this. state.description} </p>
                </div>
                
                <h2 className="project_categories">Technologies</h2>
    
                
                
            </div>
    
        )
    }
}


    
