import React ,{ Component } from 'react';
import { withRouter } from 'react-router-dom';
import "firebase/firebase-storage";

//Styles
import '../assets/styles/components/ProjectCard.css'



class ProjectCard extends Component{


    searchProject = () =>{
        this.props.history.push(`/Description?${this.props.name}`)
    }

    render(){
        return(
            
            <>
            
            <div 
            className="project_card">
                <img className="project_card--img"src={this.props.pic} alt={this.props.name} />
                    <div className="project_card--container">
                        <div  className="links-container">
                            <a className = "link" rel="noopener noreferrer" target="_blank" href={this.props.code}>
                                <span class="link-decoration">View Code</span>
                                <span class="icon-change">
                                    <img
                                    src="https://cdn.sanity.io/images/tljndwv6/production/182744b0662c24bb7d37846566bdb7ebee3470d6-15x15.svg"
                                    alt="External Link"
                                    />
                                    <img
                                    src="https://cdn.sanity.io/images/tljndwv6/production/5fa75a7c756062d52b4f0d9244759279dd216201-15x15.svg"
                                    alt="GitHub"
                                    />
                                </span>
                            </a>
                            <a className = "link" rel="noopener noreferrer" target="_blank" href={this.props.preview}>
                            <span class="link-decoration">Live Preview</span>
                                <span class="icon-change">
                                    <img
                                    src="https://cdn.sanity.io/images/tljndwv6/production/182744b0662c24bb7d37846566bdb7ebee3470d6-15x15.svg"
                                    alt="External Link"
                                    />
                                    <img
                                    className="arrow"
                                    src="https://cdn.sanity.io/images/tljndwv6/production/f6f60cfd1331a32a40eb18ec6c53a8df1d870ee4-16x16.svg"
                                    alt="GitHub"
                                    />
                                </span>
                            </a>
                            <a className = "link" rel="noopener noreferrer" onClick={this.searchProject}>
                                <span className="link-decoration">More..</span>
                            </a>
                        </div>
                    </div>
                
            </div>
            </>
            
        )
    }
}

export default withRouter(ProjectCard)