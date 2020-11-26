import React from 'react'

import reacticon from '../assets/images/icons/react-icon.png'
export default ({projectName, projectDescription, projectImage, tecnologies }) => {
    return(

        <div>
            <div>
                <img src={projectImage} alt={projectName}/>
            </div>
            <div>
                <p>{projectDescription}</p>
            </div>
            <div>
                <div>
                    <img src={reacticon} alt=""/><p>{tecnologies}</p>

                </div>
            </div>
        </div>

    )
}


    
