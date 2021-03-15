import React ,{ Component } from 'react';
import { withRouter } from 'react-router-dom';
import "firebase/firebase-storage";
//Components
import Technologies from './Technologies'
//Styles
import '../assets/styles/components/ProjectCard.css'



class ProjectCard extends Component{
    /* state = {
    url: null,
    };

    componentWillMount() {
        let ref = this.props.pic;
        firebase
            .storage()
            .ref(ref)
            .getDownloadURL()
            .then((url) => {
            this.setState({ url });
            });
    } */

    searchProject = () =>{
        this.props.history.push(`/Description?${this.props.name}`)
    }

    render(){
        return(
            
            <>
            
            <div 
            className="project_card"
            onClick={this.searchProject}>
                <img className="project_card--img"src={this.props.pic} alt={this.props.name} />
                    <div className="project_card--container">
                        <div  className="links-container">
                            <a className = "link" rel="noopener noreferrer" target="_blank" href={this.props.code}>
                                View Code
                            </a>
                            <a className = "link" rel="noopener noreferrer" target="_blank" href={this.props.preview}>
                                Live Preview
                            </a>
                            <a className = "link" rel="noopener noreferrer" onClick={this.searchProject}>
                                More..
                            </a>
                        </div>
                    </div>
                
            </div>
            </>
            
        )
    }
}

export default withRouter(ProjectCard)