import React from 'react'; 
import { Component } from 'react';
import {Navbar} from '../components/Navbar';

import Technologies from '../components/Technologies';
import Me from '../assets/images/me.png';

import '../assets/styles/containers/MyDescription.css';

export default class MyDescription extends Component{
    state={
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
                name: "Sass",
                image:'https://cdn.worldvectorlogo.com/logos/sass-1.svg'
            },
            {
                id:4,
                name:'JavaScript',
                image:'https://cdn.worldvectorlogo.com/logos/logo-javascript.svg'
            },
            {
                id:5,
                name:'React Js',
                image:'https://cdn.worldvectorlogo.com/logos/react-2.svg'
            },
            {
                id:6,
                name:'Firebase',
                image:'https://cdn.worldvectorlogo.com/logos/firebase-1.svg'
            },
            {
                id:7,
                name:'PHP',
                image:'https://cdn.worldvectorlogo.com/logos/php-1.svg'
            },
            {
                id:8,
                name:'GitHub',
                image:'https://cdn.worldvectorlogo.com/logos/github-icon-1.svg'
            }
        ]
    }

    

    render(){
        return(
            <>
                <Navbar/>
                <div className="MyDescription">
                    <div className="MyDescription_container">
                        <img className ="MyDescription_container-image" src={Me} alt="Matias Santillan"/>
                        <h1 className="MyDescription_container-title">Matias Santillan</h1>
                    </div>
                    <div className="WhoIam_container">
                        <h2 className="WhoIam_container-title">
                            Who I Am? 
                        </h2>
                        <p className="WhoIam_container-body">
                        I am a developer from Arrgentina who loves web application development. I am studying Informatics at IES 21 and constantly growing learning in online academies (like <a className="WhoIam_link" rel="noopener noreferrer"target="_blank" href="https://platzi.com/p/matisantillan11_/">Platzi</a> or <a className="WhoIam_link" target="_blank" rel="noopener noreferrer" href="https://escueladevrock.com/">Escuela DevRock</a>).</p>
                        <p className="WhoIam_container-body">My curiosity makes me able to quickly learn new tools and technologies when I needed.</p> 
                        <p className="WhoIam_container-body">I am a very capable person, focused, with passion for what I do, who knows how to work as a team, under pressure and in an organized way in the fulfillment of individual and group objectives. I am in a stage of constant learning and intellectual growth and my interest is to be part of a team that will allow me to develop widely.</p>
                    </div>
                    <div className="MyStack_container">
                        <h2 className="MyStack_container-title">My Stack</h2>
                        <Technologies technologies={this.state.technologies}/>
                    </div>
                </div>
            </>
        )
    }
}