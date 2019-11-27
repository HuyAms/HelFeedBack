import styled from 'styled-components'
import {media} from '../../styles/utils'

export const TextFeedbackContainer = styled.div`
	margin: auto;
	width: 60rem;

	${media.phone} {
		width: 100%;
	}
`

export const FeedbackTextarea = styled.textarea`
	width: 100%;
	height: 40rem;
	margin: auto;
	box-sizing: border-box;
	padding: 1.5rem;

	background: ${props => props.theme.colors.white};
	border: 1px solid rgba(0, 0, 0, 0.3);
	border-radius: 1rem;
	font-size: ${props => props.theme.fontSizes.lg};
`

export const SendTextFeedbackButton = styled.button`
	display: block;
	width: 100%;
	height: 8rem;
	border: none;
	background: ${props => props.theme.colors.cyan};
	border-radius: 1rem;
	margin: 2rem auto auto auto;

	text-align: center;
	font-size: ${props => props.theme.fontSizes.lg};
	cursor: pointer;
`
