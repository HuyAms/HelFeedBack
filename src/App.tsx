import React from 'react'
import './App.css'
import {Router} from '@reach/router'
import Main from './screen/mainPage/Main'
import Category from './screen/Category'
import Header from './components/Header/Header'
import {Container} from './style'

const App: React.FC = () => {
	return (
		<div>
			<Header />
			<Container>
				<Router>
					<Main path="/" />
					<Category path="category" />
				</Router>
			</Container>
		</div>
	)
}

export default App
