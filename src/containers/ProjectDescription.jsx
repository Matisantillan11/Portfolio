import React from 'react'
import { Component } from 'react';
import firebase from "firebase/app";
import "firebase/database";
class ProjectDescription extends Component{
    state={
        name:"",
        project: {}
    }
    searchingProject = () => {
        const db = firebase.database();
        const dbref = db.ref(`Projects/`)
        const projectRef = dbref.child(`"${this.state.name}"`)
        projectRef.get().then(function(snapshot){
            console.log(snapshot.val())
            
            /* this.setState({project: snapshot.val()}) */
        })
        
    }
    componentDidMount(){
        let projectID = this.props.history.location.search.substr(1).replace("%20", "-");
        console.log(projectID)
        this.setState({name: projectID})
        this.searchingProject()
    }

    render(){
        return(
            <h1>{this.state.name}</h1>
        )
    }
}

export default ProjectDescription