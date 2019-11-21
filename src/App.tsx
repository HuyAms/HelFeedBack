import React from 'react'
import {Router} from '@reach/router'
import ChannelLayout from './layout/ChannelLayout'
import Question from './screen/questionPage/Question'
import Category from './screen/categoryPage/Category'
import Main from './screen/mainPage/Main'
import TextFeedback from './screen/textFeedbackPage/TextFeedback'

const App = () => {
	return (
		<>
			<Router>
				<ChannelLayout path="/channel/:name">
					<Main path="/" />
					<Category path="categories" />
					<Question path="categories/:id/questions" />
					<TextFeedback path="feedback" />
				</ChannelLayout>
			</Router>
		</>
	)
}

export default App
