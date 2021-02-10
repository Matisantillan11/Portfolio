import React from 'react'
import {Link} from 'react-router-dom'
import { Component } from 'react';
//Styles
import '../assets/styles/components/ProjectCard.css'
//Importing Components
import GitHub from '../assets/images/icons/github.svg';
import projectImage from '../assets/images/godhard.png'
import Projects from '../containers/Projects';

export default class ProjectCard extends Component{
    state = {
        title: '',
        description: '',
        image: ''

    };

    handleMouseOver = () =>{
        this.setState({
            image : this.props.image,
            title : this.props.title,
            description : this.props.description
        })
    } 

    render(){
        return(
            <>
            <div 
            onMouseOver={this.props.handleMouseOver}
            className="project_card">
                <div className="project_card_titleContainer">
                    <p className="project_card--title">{this.props.title} Project</p> 
                </div>
                <img className="project_card--img"src={this.props.image} alt={this.props.title} />
                <div className="project_card--container">
                        <div className="liks-container">
                            <Link className = "link" to="/">
                                View Code <img href={GitHub}/>
                            </Link>
                            <Link className = "link" to="/">
                                Live Preview
                            </Link>
                            <Link className = "link" to={`/ProjectDescription? ${this.state.title}`}>
                                Learn More...
                            </Link>
                        </div>
                
                    
                </div>
            </div>
            </>
        )
    }
}