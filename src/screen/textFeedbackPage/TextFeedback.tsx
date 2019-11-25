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
	}

	return (
		<TextFeedbackContainer>
			<FeedbackTextarea
				value={textFeedback}
				onChange={onTextareaChange}
				maxLength={500}
				placeholder="Viesti..."
			/>
			<SendTextFeedbackButton disabled={!textFeedback}>
				Lähetä
			</SendTextFeedbackButton>
		</TextFeedbackContainer>
	)
}
export default TextFeedback
