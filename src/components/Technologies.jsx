import React from 'react'

import html from '../assets/images/icons/html5.svg'
import css from '../assets/images/icons/css3.svg'
import javascript from '../assets/images/icons/javascript.svg'
import '../assets/styles/components/Technologies.css'
const technologies = ['HTML','CSS','JavaScript']
const icons = [html, css, javascript]

export default () =>(
    <div className="project_techs--container">
        <div className="project_techsAndName--container">
            <img className="project_techs--img" src={icons[0]} alt=""/>
            <p className="projects_techs--name">{technologies[0]}</p>
        </div>
        <div className="project_techsAndName--container">
            <img className="project_techs--img" src={icons[1]} alt=""/>
            <p className="projects_techs--name">{technologies[1]}</p>
        </div>
        <div className="project_techsAndName--container">
            <img className="project_techs--img" src={icons[2]} alt=""/>
            <p className="projects_techs--name">{technologies[2]}</p>
        </div>
    </div>
)


