import React from 'react'
import { faAngleRight} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from '../components/Navbar'

import '../assets/styles/containers/HomePage.css'

import HeroImage from '../assets/images/hero.jpg'
import { Link } from 'react-router-dom'
export default () =>{
    return(
        <div>
            <Navbar/>
            <div className ="title_container">
                <h2 className="title">
                    Freelance Web Designer & Developer based in Córdoba, Argentina.
                </h2>
                <h3 className="subtitle">
                    Highly expecienced developing custom WebApps. 
                </h3>
            </div>
            <div className="main_container">
                <div className="hero">
                    <img className = "hero_image "src={HeroImage} alt="hero image" />
                </div>
                <div className="text_container">
                    <p>Hey, my name is Matias Santillan and this is my personal website. Here yo can know me a little better,See the technologies I use in my projects and see the latest I've been working on.
                    Please, feel free to get in touch if you want to work with me 😁 </p>
                    <p>✨Enjoy✨</p>
                    <div className="link_container">
                        <Link className="link" to ="/Projects"> See the latest project I've been working on <FontAwesomeIcon icon={faAngleRight} className ="arrow-icon" /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}