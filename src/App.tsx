import React from 'react'
import {Router} from '@reach/router'
import Main from './screen/mainPage/Main'
import Category from './screen/categoryPage/Category'
import Header from './components/Header/Header'
import {Container} from './style'
import Question from './screen/questionPage/Question'

const App: React.FC = () => {
	return (
		<div>
			<Header />
			<Container>
				<Router>
					<Main path="/channel/:name" />
					<Category path="/channel/:name/categories" />
					<Question path="/channel/:name/categories/:id/questions" />
				</Router>
			</Container>
		</div>
	)
}

export default App
