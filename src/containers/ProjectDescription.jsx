import React from 'react'
import { Component } from 'react';
import firebase from "firebase/app";
import "firebase/firestore";
class ProjectDescription extends Component{
    state={
        name:"",
        project: {}
    }

    searchingProject = () => {
        const db = firebase.firestore();
        const dbref = db.collection("projects")
        
        
        let projectName = this.props.history.location.search.substr(1).replace("%20", "-");

        dbref.where("name", "==", `${projectName}`).get().then((doc) =>{
           
            if(!doc.empty){
                doc.forEach(project =>{
                    if(project.exists){
                        console.log(project.data())
                        this.setState({ project: project.data()})
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
                <div>

                    <h1>{this.state.project.name}</h1>
                    <img src={this.state.project.pic} alt={this.state.project.name}/>

                    <p>{this.state.project.description}</p>
                    <a href={this.state.code} target="_blank">Code</a>
                    <a href={this.state.review} target="_blank">Review</a>

                </div>
            </>
        )
    }
}

export default ProjectDescription