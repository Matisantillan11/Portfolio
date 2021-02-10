import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import HomePage from '../containers/HomePage'
import MyDescription from '../containers/MyDescription'
import Projects from '../containers/Projects'
import ProjectsDescriptions from '../containers/ProjectsDescriptions'
import Layout from '../components/Layout.jsx'

export default () =>(
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path ="/" component={HomePage}/>
                <Route exact path ="/About" component={MyDescription}/>
                <Route exact path ="/Projects" component={Projects}/>
                <Route exact path ="/ProjectDescription" component={ProjectsDescriptions}/>
            </Switch>
        </Layout>
    </BrowserRouter>
)