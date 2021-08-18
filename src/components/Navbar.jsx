import React from 'react'

import { Hamburguer } from './Hamburguer';
import { Logo } from './Logo';

import '../assets/styles/components/Navbar.css'

export const Navbar = () => {

    return(
        <>
            <nav className="navbar">
                <Hamburguer />
                <Logo />   
            </nav>
        </>
    )
    
}