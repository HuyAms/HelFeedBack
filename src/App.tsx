import React from 'react'
import './App.css'
import {Router} from '@reach/router'
import Main from './screen/Main'
import Category from './screen/Category'
import Header from './components/Header/Header'

const App: React.FC = () => {
	return (
		<div>
			<Header />
			<Router>
				<Main path="/" />
				<Category path="category" />
			</Router>
		</div>
	)
}

export default App
