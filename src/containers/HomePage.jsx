import React from 'react'
import {Navbar} from '../components/Navbar'

import Me from '../assets/images/me.png';
import '../assets/styles/containers/HomePage.css'
import { Link } from 'react-router-dom';


export default () =>{
    return(
        <div className="home_page">

            <div id="hero">
                <div className="hero__text-container">
                    <h3 className="slogan">Hey, soy Matias Santillan</h3>
                    <p>Full-stack web developer, enfocado y dedicado al Stack de JavaScript  utilizando frameworks como React JS, React Native & Node JS.</p>

                    <p>Sientete libre de ver mi trabajo en mi portfolio web</p>

                    <p>Puedes contactarte conmigo por Linkedin o Email. Tambien puedes encontrarme en GitHub</p>
                </div>

                <Link className="hero_toaction" to="/Projects">Ver mis proyectos</Link>
            </div>
        </div>
    )
}