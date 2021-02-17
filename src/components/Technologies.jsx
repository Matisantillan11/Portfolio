import React from 'react'

import html from '../assets/images/icons/html5.svg'
import css from '../assets/images/icons/css3.svg'
import javascript from '../assets/images/icons/javascript.svg'
import '../assets/styles/components/Technologies.css'
import { Component } from 'react'
import ReactImage from '../assets/images/icons/react.svg'
import HTML5 from '../assets/images/icons/html5.svg'
import CSS3 from '../assets/images/icons/css3.svg'
import JavaScript from '../assets/images/icons/javascript.svg'
import Sass from '../assets/images/icons/sass.svg'
import PHP from '../assets/images/icons/php.svg'
import Firebase from '../assets/images/icons/firebase.svg'
import Github from '../assets/images/icons/github.svg'

class Technologies extends Component{
    render(){
        return(
            <>
                {this.props.technologies.map(techs=>{
                    return(
                        <ul key={techs.id}className="MyStack-list">
                            <li className="MyStack-list-item"><img className="MyStack-list-item--img" src={techs.image} alt={techs.name}/>{techs.name}</li>
                        </ul>
                    )
                })}
            </>
        )
    }

}

export default Technologies;
