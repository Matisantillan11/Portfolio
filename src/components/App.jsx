import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { HomePage } from '../containers/HomePage'
import { Projects } from '../containers/Projects'
import { ProjectDescription } from '../containers/ProjectDescription'
import { WorkWithMe } from '../containers/WorkWithMe'

import Layout from '../components/Layout.jsx'

export default () => (
	<BrowserRouter>
		<Layout>
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route exact path='/Projects' component={Projects} />
				<Route exact path='/Description' component={ProjectDescription} />
				<Route exact path='/Work' component={WorkWithMe} />
			</Switch>
		</Layout>
	</BrowserRouter>
)
