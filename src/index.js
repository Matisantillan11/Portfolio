import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.jsx';
import ProjectsDescriptions from './containers/ProjectsDescriptions.jsx';

let technologies = ["JavaScript","CSS3"]
ReactDOM.render(
  <React.StrictMode>{
      <ProjectsDescriptions 
      projectDescription="Working on Portfolio" 
      projectName="Portfolio"
      tecnologies={technologies} />
    }
  </React.StrictMode>,
  document.getElementById('root')
);


