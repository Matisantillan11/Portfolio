import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/images/logo.svg'


export const Logo = () => {
    return (
        <Link className="navbar_link" to="/">
            <img className = "navbar_logo" src={logo} alt=""/>
        </Link>
    )
}
