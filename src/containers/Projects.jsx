import React, {Component, useState} from 'react' 

import Navbar from '../components/Navbar'
import ProjectCard from '../components/projectCard'

import GodHard from '../assets/images/godhard.png'
import FindRock from '../assets/images/find-rock.png'


import '../assets/styles/containers/Projects.css'

export default class Projects extends Component{
    state={
        projects:[
            {
                id:1,
                title: "Dietetica Kaori",
                image:'https://i.ibb.co/RBsMxXr/portfolio.png',
                preview:'',
                code:'https://github.com/Matisantillan11/kaori_dietetica',
                description: 'This project is my personal website. The porpose was hace a place to expose my work and where people might know me better.',
                react:true
            },
            {
                id:2,
                title: "Find Rock",
                image: 'https://i.ibb.co/1rjYd42/find-rock.png',
                preview:'https://find-rock-drab.vercel.app/',
                code:'https://github.com/Matisantillan11/find-rock',
                description: 'Project from course of React in Escuela DevRock. In this project I connect to Last.fm API to create an artist/musician searcher.',
                react: true
            },
            {
                id:3,
                title: "Simon Dice",
                image: 'https://i.ibb.co/BBrd8Jz/simon-dice.png' ,
                preview:'https://simon-dice-omega.vercel.app/',
                code:'https://github.com/Matisantillan11/SimonDice',
                description: 'In this project de porpouse is to recreate SimonDice game whit a secuense to reply and using an score to know who is winning. ',
                react: false
            }
        ],
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
    render(){
        return(
            <>
            <Navbar/>
            <h1 className="project-page-title">My Projects</h1>
            <div className="projects_container">
                <ProjectCard 
                projects = {this.state.projects}
                technologies = {this.state.technologies}
                />
                
                
                
            </div>
            </>
        )
    }
}
