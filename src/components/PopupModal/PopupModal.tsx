import React from 'react'
import {
	CloseContainer,
	Content,
	PopupContent,
	LabelImg,
	PopupBackground,
	PopupContainer,
	StyledTitle,
	PopupButton,
} from './style'

interface IProps {
	type: string
	isOpen: boolean
	handleClose: () => void
	popupContent: string
	imgUrl: string
	title: string
}

const PopupModal: React.FC<IProps> = props => {
	const createCompletionModal = () => {
		return (
			<PopupBackground>
				<PopupContainer>
					<Content>
						<StyledTitle>{props.title}</StyledTitle>
						<LabelImg src={props.imgUrl} />
						<PopupContent>{props.popupContent}</PopupContent>
					</Content>
					<PopupButton onClick={props.handleClose}>
						Back to Categories
					</PopupButton>
				</PopupContainer>
			</PopupBackground>
		)
	}

	const createTimeoutModal = () => {
		return (
			<PopupBackground>
				<PopupContainer>
					<Content>
						<StyledTitle>{props.title}</StyledTitle>
						<LabelImg src={props.imgUrl} />
					</Content>
					<PopupButton onClick={props.handleClose}>Continue</PopupButton>
					<PopupButton onClick={props.handleClose}>
						Take another feedback
					</PopupButton>
				</PopupContainer>
			</PopupBackground>
		)
	}

	const createInstructionModal = () => {
		return (
			<PopupBackground>
				<PopupContainer>
					<CloseContainer onClick={props.handleClose}>X</CloseContainer>
					<Content>
						<StyledTitle>{props.title}</StyledTitle>
						<LabelImg src={props.imgUrl} />
						<PopupContent>{props.popupContent}</PopupContent>
					</Content>
				</PopupContainer>
			</PopupBackground>
		)
	}

	return props.isOpen
		? props.type === 'instruction'
			? createInstructionModal()
			: props.type === 'timeout'
			? createTimeoutModal()
			: createCompletionModal()
		: null
}

export default PopupModal
