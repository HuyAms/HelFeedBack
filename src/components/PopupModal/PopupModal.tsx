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
	PopupButtonContainer,
} from './style'

interface IProps {
	isOpen: boolean
	handleClose: () => void
	popupContent: string
	imgUrl: string
	title: string
	completeButtonIsHidden: boolean
	timeoutButtonIsHidden: boolean
}

const PopupModal: React.FC<IProps> = props => {
	const createPopupButton = () => {
		return !props.completeButtonIsHidden ? (
			<PopupButton onClick={props.handleClose}>Back to Category</PopupButton>
		) : !props.timeoutButtonIsHidden ? (
			<PopupButtonContainer>
				<PopupButton onClick={props.handleClose}>Continue</PopupButton>
				<PopupButton onClick={props.handleClose}>
					Take another feedback
				</PopupButton>
			</PopupButtonContainer>
		) : null
	}

	return props.isOpen ? (
		<PopupBackground>
			<PopupContainer>
				<CloseContainer onClick={props.handleClose}>X</CloseContainer>
				<Content>
					<StyledTitle>{props.title}</StyledTitle>
					<LabelImg src={props.imgUrl} />
					<PopupContent>{props.popupContent}</PopupContent>
					{createPopupButton()}
				</Content>
			</PopupContainer>
		</PopupBackground>
	) : null
}

export default PopupModal
