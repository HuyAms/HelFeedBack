import React from 'react'
import {
	CloseContainer,
	Content,
	PopupContent,
	LabelImg,
	PopupBackground,
	PopupContainer,
	StyledTitle,
} from './style'
import ImgSource from '../../assets/hero-image.png'

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
				</Content>
			</PopupContainer>
		</PopupBackground>
	) : null
}

export default PopupModal
