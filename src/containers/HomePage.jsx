import React from 'react'
import { faAngleRight} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navbar from '../components/Navbar'

import '../assets/styles/containers/HomePage.css'

import HeroImage from '../assets/images/illustration-devices.svg'
import { Link } from 'react-router-dom'
export default () =>{
    return(
        <div>
            <Navbar/>
            
            <div className="main_container">
                    <div className="hero">
                        <img className = "hero_image "src={HeroImage} alt="hero" />
                    </div>
                
                    <div className="text_container">
                        <h2 className="title">
                            Freelance Web Designer & Developer  <br /> based in Córdoba, Argentina.
                        </h2>
                        <h3 className="subtitle animation-typewriter">
                            Highly expecienced developing custom WebApps. 
                        </h3>
                        <p>Hey, my name is Matias Santillan and this is my personal website. Here you can know me a little better, see the technologies I use in my projects and see the latest I've been working on.
                        Please, feel free to get in touch if you want to work with me <span role="img" aria-labelledby="big-smile">😁</span> </p>
                        <p><span role="img" aria-labelledby="stars">✨</span>Enjoy<span role="img" aria-labelledby="stars">✨</span></p>
                        <div className="link_container">
                            <Link className="link" to ="/Projects"> See the latest project I've been working on <FontAwesomeIcon icon={faAngleRight} className ="arrow-icon" /></Link>
                        </div>
                    </div>
            </div>
        </div>
    )
}