import React from 'react'
import { Component } from 'react'


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
