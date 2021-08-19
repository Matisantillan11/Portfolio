import React from 'react'
import {Navbar} from '../components/Navbar'

import Me from '../assets/images/me.png';
import '../assets/styles/containers/HomePage.css'


export default () =>{
    return(
        <div className="home_page">
            <Navbar/> 

            <div id="hero">
                <div className="hero__text-container">
                    <h3 className="slogan">Hey, soy Matias Santillan</h3>
                    <p>Fullstack developer y apasionado por la tecnología</p>
                </div>

                <a className="hero_toaction"href="">Más sobre mi</a>
            </div>
            <div id="about">
            
                <h2 className="WhoIam_container-title">
                    Quien soy? 
                </h2>
                <p className="WhoIam_container-body">
               Soy Desarrollador de Software que le encanta crear con tecnologías webs</p>
    

                    
            </div>
           
        </div>
    )
}