import React from 'react'

import Footer from '../components/Footer.jsx'

export default function Layout ({children}) {
    return(
        <>
            {children}
            <Footer />
        </>
    )
}