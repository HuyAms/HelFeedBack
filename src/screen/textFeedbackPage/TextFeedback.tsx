import React from 'react'
import {RouteComponentProps} from '@reach/router'
import {
	TextFeedbackContainer,
	FeedbackTextarea,
	SendTextFeedbackButton,
} from './style'
import {Feedback} from '../../models/Feedback'
import ModelState from '../../models/bases/ModelState'
import Survey from '../../models/Survey'
import App from '../../models/App'
import Channel from '../../models/Channel'
import {createFeedback} from '../../modules/Feedback'
import {connect} from 'react-redux'

interface Props extends RouteComponentProps<{name: string}> {
	path: string
	survey: ModelState<Survey>
	app: App
	channel: ModelState<Channel>
	feedback: ModelState<Feedback>
	createFeedback: (feedback: Feedback) => any
}

const TextFeedback: React.FC<Props> = props => {
	const [textFeedback, setTextFeedback] = React.useState('')

	const {survey, app, channel, feedback} = props

	const onTextareaChange = e => {
		setTextFeedback(e.target.value)
	}

	const submitFeedbackText = () => {
		const feedback: Feedback = {
			channelId: channel.data._id,
			surveyId: survey.data._id,
			value: textFeedback,
			userGroup: app.userGroup,
		}

		props.createFeedback(feedback)
	}

	return (
		<TextFeedbackContainer>
			<FeedbackTextarea
				value={textFeedback}
				onChange={onTextareaChange}
				maxLength={500}
				placeholder=" Message..."
			/>
			<SendTextFeedbackButton
				disabled={!textFeedback}
				onClick={submitFeedbackText}
			>
				Send it
			</SendTextFeedbackButton>
		</TextFeedbackContainer>
	)
}

const mapStateToProps = ({survey, app, feedback, channel}) => {
	return {survey, app, feedback, channel}
}

const mapDispatchToProps = {
	createFeedback,
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(TextFeedback)
