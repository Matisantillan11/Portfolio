import React from 'react'
import {Navbar} from '../components/Navbar'

import Me from '../assets/images/me.png';
import '../assets/styles/containers/HomePage.css'


export default () =>{
    return(
        <div>
            <Navbar/>
            
            <div className="MyDescription_container">
                <img className ="MyDescription_container-image" src={Me} alt="Matias Santillan"/>
            </div>   

        </div>
    )
}