import React, {Component} from 'react' 

import Navbar from '../components/Navbar'
import ProjectCard from '../components/projectCard'
import firebase from "firebase/app";
import "firebase/database";
import '../assets/styles/containers/Projects.css'

export default class Projects extends Component{
    state={
        projects:[],
        technologies:[
                {
                    id:1,
                    name: "HTML5",
                    image: 'https://cdn.worldvectorlogo.com/logos/html5.svg'
                },
                {
                    id:2,
                    name: "CSS3",
                    image: 'https://cdn.worldvectorlogo.com/logos/css3.svg' 
                }, 
                {
                    id:3,
                    name:'JavaScript',
                    image:'https://cdn.worldvectorlogo.com/logos/logo-javascript.svg'
                },
                {
                    id:4,
                    name:'React Js',
                    image:'https://cdn.worldvectorlogo.com/logos/react-2.svg'
                },
                {
                    id:5,
                    name:'Firebase',
                    image:'https://cdn.worldvectorlogo.com/logos/firebase-1.svg'
                }
        ]
    }

    componentDidMount() {
        this.setState({
          projects: [],
          loading: true,
          error: false,
        });
    
        const db = firebase.database();
        const dbref = db.ref("Projects");
    
        dbref.on("child_added", (snapshot) => {
          this.setState({
            projects: this.state.projects.concat(snapshot.val()),
            loading: false,
            error: false,
          });
        });
      }

    render(){
        return(
            <>
            <Navbar/>
            <h1 className="project-page-title">My Projects</h1>
            <div className="projects_container">
                {this.state.projects.map((project, i) =>(

                    <ProjectCard
                    key= {i}
                    name={project.name}
                    pic={project.pic}
                    description={project.description}
                    react ={project.react}
                    code={project.code}
                    review={project.review}
                    technologies = {this.state.technologies}
                    />
                ))}
                
                
                
            </div>
            </>
        )
    }
}
