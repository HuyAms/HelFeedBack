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
import {PopupButton} from '../../components/PopupModal/style'
import PopupModal from '../../components/PopupModal/PopupModal'

import SuccessIcon1 from '../../assets/reward-icons/005-medal.png'
import SuccessIcon2 from '../../assets/reward-icons/009-medal.png'
import SuccessIcon3 from '../../assets/reward-icons/010-trophy.png'
import SuccessIcon4 from '../../assets/reward-icons/011-medal.png'
import SuccessIcon5 from '../../assets/reward-icons/012-trophy.png'
import SuccessIcon6 from '../../assets/reward-icons/013-medal.png'
import SuccessIcon7 from '../../assets/reward-icons/014-trophy.png'
import SuccessIcon8 from '../../assets/reward-icons/019-medal.png'

interface Props extends RouteComponentProps<{name: string}> {
	path: string
	survey: ModelState<Survey>
	app: App
	channel: ModelState<Channel>
	feedback: ModelState<Feedback>
	createFeedback: (feedback: Feedback) => any
}

interface CompleteImage {
	path: string
}

const TextFeedback: React.FC<Props> = props => {
	const [textFeedback, setTextFeedback] = React.useState('')

	const completeImageArray: CompleteImage[] = [
		{
			path: SuccessIcon1,
		},
		{
			path: SuccessIcon2,
		},
		{
			path: SuccessIcon3,
		},
		{
			path: SuccessIcon4,
		},
		{
			path: SuccessIcon5,
		},
		{
			path: SuccessIcon6,
		},
		{
			path: SuccessIcon7,
		},
		{
			path: SuccessIcon8,
		},
	]

	const randomCompleteImage =
		completeImageArray[Math.floor(Math.random() * completeImageArray.length)]
			.path

	const [isCompleteVisible, setCompleteVisible] = React.useState(false)

	const {survey, app, channel, feedback} = props

	const handleCloseComplete = () => {
		setCompleteVisible(false)
	}

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

		setCompleteVisible(true)
		props.createFeedback(feedback)
		setTextFeedback('')
	}

	return (
		<TextFeedbackContainer>
			<PopupModal
				isOpen={isCompleteVisible}
				handleClose={handleCloseComplete}
				imgUrl={randomCompleteImage}
				title="Hyvää työtä!"
				popupContent="Kiitos vastauksestasi"
			>
				<PopupButton onClick={handleCloseComplete}>Jatka</PopupButton>
			</PopupModal>

			<FeedbackTextarea
				value={textFeedback}
				onChange={onTextareaChange}
				maxLength={500}
				placeholder="Viesti..."
			/>
			<SendTextFeedbackButton
				disabled={!textFeedback}
				onClick={submitFeedbackText}
			>
				Lähetä
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
