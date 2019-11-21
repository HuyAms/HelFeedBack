import styled from 'styled-components'

export const TextFeedbackContainer = styled.div``

export const FeedbackTextarea = styled.textarea`
	display: block;
	width: 60rem;
	height: 45rem;
	margin: auto;

	background: ${props => props.theme.colors.white};
	border: 1px solid rgba(0, 0, 0, 0.3);
	border-radius: 1rem;
	font-size: ${props => props.theme.fontSizes.lg};
`

export const SendTextFeedbackButton = styled.button`
	display: block;
	width: 60rem;
	height: 8rem;
	border: none;
	background: ${props => props.theme.colors.cyan};
	border-radius: 1rem;
	margin: auto;
	margin-top: 3rem;

	text-align: center;
	font-size: ${props => props.theme.fontSizes.lg};
	cursor: pointer;
`
