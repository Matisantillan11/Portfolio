import React from 'react'; 
import { Component } from 'react';
import Navbar from '../components/Navbar';

import Me from '../assets/images/me.png';

import ReactImage from '../assets/images/icons/react.svg'
import HTML5 from '../assets/images/icons/html5.svg'
import CSS3 from '../assets/images/icons/css3.svg'
import JavaScript from '../assets/images/icons/javascript.svg'
import Sass from '../assets/images/icons/sass.svg'
import PHP from '../assets/images/icons/php.svg'
import Firebase from '../assets/images/icons/firebase.svg'
import Github from '../assets/images/icons/github.svg'
import Platzi from '../assets/images/icons/platzi.png'
import Devrock from '../assets/images/icons/devrock.svg'

import '../assets/styles/containers/MyDescription.css';

export default class MyDescription extends Component{
    render(){
        return(
            <div>
                <Navbar/>
                <div className="MyDescription_container">
                    <img className ="MyDescription_container-image" src={Me} alt="Matias Santillan"/>
                    <h1 className="MyDescription_container-title">Matias Santillan</h1>
                </div>
                <div className="WhoIam_container">
                    <h2 className="WhoIam_container-title">
                        Who I Am? 
                    </h2>
                    <p className="WhoIam_container-body">
                    I am a developer from Arrgentina who loves web application development. I am studying Informatics at IES 21 and constantly growing learning in online academies (like <a className="WhoIam_link" target="_blank" href="https://platzi.com/p/matisantillan11_/">Platzi{/* <img className="WhoIam_link-img"src={Platzi}/> */}</a> or <a className="WhoIam_link" target="_blank" href="https://escueladevrock.com/">Escuela DevRock{/* <img className="WhoIam_link-img-dev"src={Devrock}/> */}</a>).</p>
                    <p className="WhoIam_container-body">My curiosity makes me able to quickly learn new tools and technologies when I needed.</p> 
                    <p className="WhoIam_container-body">I am a very capable person, focused, with passion for what I do, who knows how to work as a team, under pressure and in an organized way in the fulfillment of individual and group objectives. I am in a stage of constant learning and intellectual growth and my interest is to be part of a team that will allow me to develop widely.</p>
                </div>
                <div className="MyStack_container">
                    <h2 className="MyStack_container-title">My Stack</h2>
                    <ul className="MyStack-list">
                        <li className="MyStack-list-item"><img className="MyStack-list-item--img" src={HTML5} alt="html Icon"/>HTML</li>
                        <li className="MyStack-list-item"><img className="MyStack-list-item--img" src={CSS3} alt="Css icon"/>CSS</li>
                        <li className="MyStack-list-item"><img className="MyStack-list-item--img" src={Sass} alt="Sass icon"/>Sass</li>
                        <li className="MyStack-list-item"><img className="MyStack-list-item--img" src={JavaScript} alt="Javascript Icon"/>JavaScript</li>
                        <li className="MyStack-list-item"><img className="MyStack-list-item--img" src={ReactImage} alt="React Icon"/>React Js</li>
                        <li className="MyStack-list-item"><img className="MyStack-list-item--img" src={Firebase} alt="php icon"/>Firebase</li>
                        <li className="MyStack-list-item"><img className="MyStack-list-item--img" src={PHP} alt="php icon"/>PHP</li>
                        <li className="MyStack-list-item"><img className="MyStack-list-item--img" src={Github} alt="php icon"/>Github</li>
                    </ul>
                </div>
            </div>
        )
    }
}