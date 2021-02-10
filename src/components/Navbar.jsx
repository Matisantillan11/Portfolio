
import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import '../assets/styles/components/Navbar.css'

import logo from '../assets/images/logo.svg'

export default function Navbar (){
    const [status, setStatus] = useState("close");

    const expandMenu = (ev) => {
    ev.preventDefault()
    const menu = document.getElementById('menu')
    const links = document.querySelectorAll(".navbar__items-menu .navbar__items--link")
    setStatus(status === "open" ? "close" : "open")
    menu.classList.toggle('expand')
    links.forEach(link => {
        link.classList.toggle('fade')
    })
    };

    
        return(
            <div>
                <nav className="navbar">
                    <div onClick={expandMenu} className="burger">
                        <i className={status}></i>
                        <i className={status}></i>
                        <i className={status}></i>
                    </div>
                    <Link to="/">
                        <img className = "navbar_logo" src={logo} alt=""/>
                    </Link>
                    <ul className="navbar__items-menu" id="menu" status= {status}>
                        <li className="navbar__items--link"><Link className="navbar_redirections"to="/Projects">Portfolio</Link></li>
                        <li className="navbar__items--link"><Link className="navbar_redirections"to="/About">About me</Link></li>
                        <li className="navbar__items--link"><a className="navbar_redirections"href="mailto:matias1.santillan@gmail.com">Contact me</a></li>
                        <li className="navbar__items--link"><a className="navbar_redirections" target="_blank" href="https://www.linkedin.com/in/matisantillan11/">Linkedin</a></li>
                        <li className="navbar__items--link"><a className="navbar_redirections" target="_blank" href="https://github.com/Matisantillan11">Github</a></li>
                        <li className="navbar__items--link"><a className="navbar_redirections"href="/">CV</a></li>
                    </ul>
                    
                </nav>
            </div>
        )
    
}