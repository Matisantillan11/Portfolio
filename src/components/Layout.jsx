import React from 'react'

import Footer from '../components/Footer.jsx'
import { Navbar } from './Navbar.jsx'

export default function Layout ({children}) {
    return(
        <>
            <Navbar/>
            {children}
            <Footer />
        </>
    )
}