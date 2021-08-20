import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { HomePage } from '../containers/HomePage'

import { Projects } from '../containers/Projects'
import Layout from '../components/Layout.jsx'
import { ProjectDescription } from '../containers/ProjectDescription'

export default () => (
	<BrowserRouter>
		<Layout>
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/Projects' component={Projects} />
				<Route exact path='/Description' component={ProjectDescription} />
			</Switch>
		</Layout>
	</BrowserRouter>
)
