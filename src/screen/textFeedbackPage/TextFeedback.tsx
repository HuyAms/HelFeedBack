import React from 'react'
import {RouteComponentProps} from '@reach/router'
import {
	TextFeedbackContainer,
	FeedbackTextarea,
	SendTextFeedbackButton,
} from './style'

interface Props extends RouteComponentProps<{name: string}> {}

const TextFeedback: React.FC<Props> = () => {
	const [textFeedback, setTextFeedback] = React.useState('')

	const onTextareaChange = e => {
		setTextFeedback(e.target.value)
		console.log(`value for feedback is: ${e.target.value}`)
	}

	return (
		<TextFeedbackContainer>
			<FeedbackTextarea
				value={textFeedback}
				onChange={onTextareaChange}
				placeholder="Message..."
			></FeedbackTextarea>
			<SendTextFeedbackButton disabled={!textFeedback}>
				Send it
			</SendTextFeedbackButton>
		</TextFeedbackContainer>
	)
}
export default TextFeedback
