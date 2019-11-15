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
	isOpen: boolean
	handleClose: () => void
	popupContent: string
	imgUrl: string
	title: string
	isHidden: boolean
}

const PopupModal: React.FC<IProps> = props => {
	const createPopupButton = () => {
		return props.isHidden ? null : (
			<PopupButton onClick={props.handleClose}>Continue</PopupButton>
		)
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
