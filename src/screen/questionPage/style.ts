import styled from 'styled-components'
import {media} from '../../styles/utils'

export const Container = styled.div`
	display: flex;
	flex-direction: column;

	${media.tabPort} {
		max-width: 90%;
		margin: 0 auto;
	}

	${media.phone} {
		max-width: 100%;
	}
`

export const TitleContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	${media.tabPort} {
		margin-bottom: 3rem;
	}

	${media.phone} {
		justify-content: space-around;
	}
`

export const StyledArrowImage = styled.img`
	width: 6rem;
	height: 6rem;

	cursor: pointer;
`

export const TitleContentContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	width: auto;
	height: auto;
`

export const InstructionButton = styled.div`
	background-color: ${props => props.theme.appColors.secondary};
	font-size: ${props => props.theme.fontSizes.xl};
	border-radius: 1rem;

	width: 4rem;
	height: 4rem;
	margin-left: 1rem;
	font-weight: bold;

	display: flex;
	justify-content: center;
	align-items: center;
`

export const QuestionContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	border-radius: 2rem;
	background-color: ${props => props.theme.appColors.secondary};
	padding: 1.6rem;
	height: 11rem;
	margin-top: 2rem;

	${media.tabPort} {
		margin-top: 0;
	}
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

	padding: 1.5rem;

	${media.phone} {
		display: none;
	}
`

export const AnswerContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

export const AnswerImage = styled.img`
	width: 15rem;
	height: 15rem;
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

export const DataContainer = styled.div`
	display: flex;
	flex-direction: column;
`

export const InfoContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`

export const MobileAnswerContainer = styled.div`
	display: none;

	${media.phone} {
		display: block;
		margin-top: 2rem;
		padding: 0 20px;
		width: 100%;
	}
`

export const DataContent = styled.h1`
	${media.phone} {
		font-size: ${props => props.theme.fontSizes.xl};
	}
`

// export const StyledFooter = styled.div`
// 	display: none;
//
// 	${media.phone} {
// 		position: absolute;
// 		bottom: 0;
// 		right: 0;
// 		left: 0;
//
// 		display: flex;
// 		align-items: center;
// 		justify-content: space-around;
// 	}
// `

export const MobileStyledArrowImage = styled.img`
	display: none;

	${media.phone} {
		display: block;
		width: 6rem;
		height: auto;
	}
`

export const QuestionContainerText = styled.p`
	${media.phone} {
		font-size: ${props => props.theme.fontSizes.md};
	}
`
