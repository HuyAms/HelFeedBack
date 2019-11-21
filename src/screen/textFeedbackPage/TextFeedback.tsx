import React from 'react'
import {RouteComponentProps} from '@reach/router'
import {
	TextFeedbackContainer,
	FeedbackTextarea,
	SendTextFeedbackButton,
} from './style'

interface Props extends RouteComponentProps<{name: string}> {}

//TODO: disable send button if the textarea is empty

const TextFeedback: React.FC<Props> = () => {
	return (
		<TextFeedbackContainer>
			<FeedbackTextarea autoFocus placeholder="Message..."></FeedbackTextarea>
			<SendTextFeedbackButton>Send it</SendTextFeedbackButton>
		</TextFeedbackContainer>
	)
}
export default TextFeedback
