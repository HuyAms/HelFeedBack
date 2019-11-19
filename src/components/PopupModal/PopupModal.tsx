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
}

const PopupModal: React.FC<IProps> = props => {
	return props.isOpen ? (
		<PopupBackground>
			<PopupContainer>
				<CloseContainer onClick={props.handleClose}>X</CloseContainer>
				<Content>
					<StyledTitle>{props.title}</StyledTitle>
					<LabelImg src={props.imgUrl} />
					<PopupContent>{props.popupContent}</PopupContent>
					{props.children}
				</Content>
			</PopupContainer>
		</PopupBackground>
	) : null
}

export default PopupModal
