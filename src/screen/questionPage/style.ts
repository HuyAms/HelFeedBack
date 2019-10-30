import styled from 'styled-components'
import {media} from '../../styles/utils'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
`

export const TitleContainer = styled.div`
	display: flex;
	justify-content: space-between;
	margin-bottom: 2rem;
`

export const StyledArrowImage = styled.img`
	width: 6rem;
	height: auto;
`

export const TitleContentContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	width: auto;
	height: auto;
`

export const InstructionButton = styled.div`
	background-color: ${props => props.theme.appColors.secondary};
	font-size: ${props => props.theme.fontSizes.xl};
	border-radius: 1rem;
	padding: 0.7rem;
	width: 8rem;
	height: 8rem;
	text-align: center;
	margin-left: 5.5rem;
	font-weight: bold;
`

export const QuestionContainer = styled.div`
	display: flex;
	margin-bottom: 2rem;

	${media.phone} {
		flex-direction: column-reverse;
	}
`

export const QuestionContentContainer = styled.div`
	flex: 3;

	display: flex;
	align-items: center;
	justify-content: center;

	border-radius: 2rem;
	background-color: ${props => props.theme.appColors.secondary};
	padding: 0.7rem;
	margin-right: 1.6rem;
`

export const DataContentContainer = styled.div`
	flex: 2;

	display: grid;
	grid-template-columns: 1fr auto;
	align-items: center;

	border-radius: 2rem;
	background-color: ${props => props.theme.colors.gray};
	padding: 2rem;
`

export const ContentContainer = styled.div`
	text-align: center;
	padding: 0.5rem;
`

export const DataImage = styled.img`
	width: 10rem;
	height: auto;
`

export const AnswerContainer = styled.div`
	display: flex;
	justify-content: space-around;

	padding: 2rem;
`

export const AnswerContentContainer = styled.div`
	display: flex;
	flex-direction: column;
`

export const AnswerImage = styled.img`
	width: 15rem;
	height: 15rem;
	margin-bottom: 2rem;
	cursor: pointer;
	transform: scale(0.8);
	transition: all 0.2s ease-in;

	:hover {
		transform: scale(1);
	}
`

export const AnswerLabelContainer = styled.div`
	text-align: center;
`
