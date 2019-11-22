import React from 'react'
import {RouteComponentProps, Router} from '@reach/router'
import ChannelLayout from './layout/ChannelLayout'
import Question from './screen/questionPage/Question'
import Category from './screen/categoryPage/Category'
import AdminHome from './screen/admin/home'
import Main from './screen/mainPage/Main'
import TextFeedback from './screen/textFeedbackPage/TextFeedback'
import AdminLayout from './layout/AdminLayout'
import SignIn from './screen/auth/signin'
import AdminLogout from './screen/admin/logout/AdminLogout'

interface Props extends RouteComponentProps {}
const NotFound: React.FunctionComponent<Props> = () => {
	return <p>Channel not found</p>
}

const App = () => {
	return (
		<Router>
			<AdminLayout path="admin">
				<AdminHome path="home" />
				<AdminLogout path="logout" />
			</AdminLayout>
			<SignIn path="auth/signin" />
			<ChannelLayout path="/channel/:name">
				<Main path="/" />
				<Category path="categories" />
				<Question path="categories/:id/questions" />
				<TextFeedback path="feedback" />
			</ChannelLayout>
			<NotFound default={true} />
		</Router>
	)
}

export default App
