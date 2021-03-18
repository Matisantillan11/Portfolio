import React from 'react'
import { Component } from 'react';
import firebase from "firebase/app";
import "firebase/firestore";


import Navbar from '../components/Navbar.jsx'
import '../assets/styles/containers/ProjectDescription.css'
class ProjectDescription extends Component{
    state={
        name:"",
        project: {
            technologies:[],
            images:[]
        },
        loading: true,
        error: false
    }

    searchingProject = () => {
        const db = firebase.firestore();
        const dbref = db.collection("projects")
        
        
        let projectName = this.props.history.location.search.substr(1).replace("%20", "-");

        dbref.where("name", "==", `${projectName}`).get().then((doc) =>{
            if(!doc.empty){
                this.setState({loading: true})
                doc.forEach(project =>{
                    if(project.exists){
                        this.setState({ 
                            loading:false,
                            project: project.data(),
                        })
                    }
                })
                
            } 
            else{
                console.log("not added")
            }
        }).catch(error => console.log(error.message))
        
    }
    componentDidMount(){
        
        this.searchingProject()
    }
    
    render(){
        return(
            <>  
                <Navbar/>
                {this.state.loading && <p>Loading...</p>}
                <div className="projectDescription_container">
                    <h1 className="title-description">{this.state.project.name} PROJECT</h1>
                    <div className="topbar">
                        <p>🚀 {this.state.project.subtitle}</p>

                        <a href={this.state.project.code} target="_blank">Code</a>
                        <a href={this.state.project.review} target="_blank">Review</a>
                    </div>
                    <div className="images-container">
                        <img src={this.state.project.pic} alt={this.state.project.name}/>
                    </div>
                    <div className="description_container">
                        <h2>About</h2>
                        <p>{this.state.project.description}</p>
                        <p>{this.state.project.subdescription}</p>
                        <p>{this.state.project.p1}</p>
                        <p>{this.state.project.p2}</p>
                    </div>
                    <div className="techs_container">
                        <h2>Technologies</h2>
                        {this.state.project.technologies.map((tech, i) =>{
                            return(
                                <ul key={i}>
                                    <li className="MyStack-list-item">
                                        <img key={i} className="MyStack-list-item--img" src={this.state.project.images[i]} alt={tech}/>
                                    {tech}</li>
                                </ul>
                            )
                        })}
                    </div>
                </div>
            </>
        )
    }
}

export default ProjectDescription