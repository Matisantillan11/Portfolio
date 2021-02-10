import React from 'react'

import '../assets/styles/components/Footer.css'

const Footer = ({children}) =>{
        return(
            <>
                {children}
                
                <div className="footer_container">
                    <p className="footer_text">Todos los derechos reservados. 2021 @matisantillan11</p>
                </div>
                
            </>
        )
}

export default Footer